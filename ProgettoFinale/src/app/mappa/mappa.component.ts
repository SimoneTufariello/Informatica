import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http'; //HTTP Client
import { Observable } from 'rxjs'; //OBSERVABLE
import { Monop } from './Monop.model'; //OBSERVABLE

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

  constructor(public http: HttpClient) {
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

}
