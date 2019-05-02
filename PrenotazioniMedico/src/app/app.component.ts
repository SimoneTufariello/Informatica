import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { prenotaz } from './prenotaz/prenotaz.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  prenotaz : prenotaz[];
  data: Object;
  loading: boolean;
  vettPren : Observable<prenotaz[]>;
  oPren: Observable<Object>;
  num: number = 0;
  tempPren: prenotaz;

   constructor(public http: HttpClient) {
    //Fai la get e ottieni la lista di articoli e riempi il vettore articles
    this.prenotaz = new Array<prenotaz>();
    this.vettPren = this.http.get<prenotaz[]>('https://my-json-server.typicode.com/DB/DBMedico');
    this.vettPren.subscribe(this.riceviDati);
  }

  riceviDati = (data) => {
   // this.articles = data; //Se non ci fossero metodi, basterebbe fare così
    for(let element of data)
    {
       this.prenotaz.push(new prenotaz(element.nome, element.cognome, element.indirizzo, element.telefono, element.email, element.dataPrenotaz, element.oraPrenotaz ));
    }
  /*  data.forEach(element => {
      this.articles.push(new Article(element.title, element.body));
    });*/
  }

  AddPrenotazione(nome: HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, telefono: HTMLInputElement, email: HTMLInputElement, dataPrenotaz: HTMLInputElement, oraPrenotaz: HTMLInputElement): boolean {


    //mandi un apost al server
    console.log("Sto aggiungendo la prenotaz");

    this.tempPren = new prenotaz(nome.value, cognome.value, indirizzo.value, telefono.value, email.value, dataPrenotaz.value, oraPrenotaz.value);
    this.loading = true;
    this.oPren = this.http.post('https://my-json-server.typicode.com/DB/DBMedico', JSON.stringify(this.tempPren));


    this.oPren.subscribe(data => {
      this.data = data;

      //console.log(data);
      this.loading = false;

      this.prenotaz.push(this.tempPren);

    });

    return false;
  }
}
