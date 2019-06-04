import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; //COOKIE
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http'; //HTTP HttpClient
import { Observable, combineLatest } from 'rxjs'; //OBSERVABLE

@Component({
  selector: 'app-guasto',
  templateUrl: './guasto.component.html',
  styleUrls: ['./guasto.component.css']
})
export class GuastoComponent implements OnInit {
  data: Object;
  o :Observable<Object>;
  mex: string;

  constructor(public http: HttpClient, private cookieService: CookieService) { }

  //SEGNALA GUASTO
  SendGuasto(descrizione: HTMLInputElement, codGuasto: HTMLInputElement):boolean{
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });


    const params = new HttpParams()
      .set('descrizione', descrizione.value)
      .set('codGuasto', codGuasto.value)
      .set('IdUtente', this.cookieService.get('Utente'))
      .set('QRCode', this.cookieService.get('Monop'))
      .set('Lat', "")
      .set('Long', "");

      const options = {
      headers,
      params,
      withCredentials: false
    };

    var parameter = JSON.stringify({ descrizione: descrizione.value, codGuasto: codGuasto.value, IdUtente: this.cookieService.get('Utente'), QRCode: this.cookieService.get('Monop'), Lat: "1", Long: "2"});

    this.http.post('https://3001-c58ed4f4-a087-4683-bc1d-2e35d72adad7.ws-eu0.gitpod.io/GuastoMonop',null, options  )
      .subscribe(data => {
        this.data = data;
        if(this.data[0] == "OK"){
          this.mex = "Segnalazione inviata correttamente!";

        }else{
          this.mex = "Errore, riprova più tardi!";
        }
    });
    return false;
  }

  ngOnInit() {
  }

}
