import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http'; //HTTP Client
import { Observable } from 'rxjs'; //OBSERVABLE
import { Monop } from './Monop.model'; //MONOP
import { CookieService } from 'ngx-cookie-service'; //COOKIE

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit {

  data: Object;
  o :Observable<Object>;
  //monop: Array<Monop>= [];
  @Input() monop: Monop[];
  mex: String;
  mex2: String;

  constructor(public http: HttpClient, private cookieService: CookieService) {
    this.riceviTutto();

  }

  riceviTutto(): void {
     this.o = this.http.get<Monop[]>('https://3001-c58ed4f4-a087-4683-bc1d-2e35d72adad7.ws-eu0.gitpod.io/VisualizzaMonop');
     this.o.subscribe(this.getData);
   }

   getData = (d : Monop[]) =>
   {
     this.monop = d;;
     console.log(this.monop);
   }

  //Milano
  lat: number = 45.518070;
  lng: number = 9.162860;

  ngOnInit() {
  }

  //PRENOTA MONOPATTINO
  PrenotaMonop(QRCodeP: HTMLInputElement): boolean{
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });


    const params = new HttpParams()
      .set('QRCode', QRCodeP.value)
      .set('IdUtente', this.cookieService.get('Utente'))
      .set('Lat', "")
      .set('Long', "");
      const options = {
      headers,
      params,
      withCredentials: false
    };

    var parameter = JSON.stringify({ QRCode: QRCodeP.value, IdUtente: this.cookieService.get('Utente'), Lat: "1", Long: "1" });

    this.http.post('https://3001-c58ed4f4-a087-4683-bc1d-2e35d72adad7.ws-eu0.gitpod.io/PrendiMonop',null, options  )
      .subscribe(data => {
        this.data = data;
        if(this.data[0].mex == "OK"){
          this.cookieService.set("Monop", QRCodeP.value);
          this.mex = "Monopattino sbloccato!";
        }else{
          this.mex = "Errore, riprova più tardi!";
        }
    });
    return false;
  }


  //LASCIA MONOPATTINO
  Blocca(): boolean{
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });


    const params = new HttpParams()
      .set('QRCode', this.cookieService.get('Monop'))
      .set('IdUtente', this.cookieService.get('Utente'))
      .set('Lat', "")
      .set('Long', ""); //coordinate andranno prese dalla geolocalizzazione
      const options = {
      headers,
      params,
      withCredentials: false
    };

    var parameter = JSON.stringify({ QRCode: this.cookieService.get('Monop'), IdUtente: this.cookieService.get('Utente'), Lat: "1", Long: "1" });

    this.http.post('https://3001-c58ed4f4-a087-4683-bc1d-2e35d72adad7.ws-eu0.gitpod.io/LasciaMonop',null, options  )
      .subscribe(data => {
        this.data = data;
        if(this.data[0].mex == "OK"){
          this.mex2 = "Monopattino bloccato!";
        }else{
          this.mex2 = "Errore, riprova più tardi!";
        }
    });
    return false;
  }
}
