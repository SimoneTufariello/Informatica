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
  oPren: Observable<Object>;


   constructor(public http: HttpClient) {
    this.riceviTutto();
    //Fai la get e ottieni la lista di articoli e riempi il vettore articles
    /*this.prenotaz = new Array<prenotaz>();
    this.vettPren = this.http.get<prenotaz[]>('https://raw.githubusercontent.com/DB/DBMedico/master/db.json');
    this.vettPren.subscribe(this.riceviDati);*/
  }

  riceviTutto(): void {
     console.log("here");
     this.loading = true;
     this.oPren = this.http.get<prenotaz[]>('https://github.com/SimoneTufariello/DBMedico/prenotazioni');
     this.oPren.subscribe(this.getData);
   }

   getData = (d : prenotaz[]) =>
   {
     this.data = new Object(d);
     this.prenotaz = d;
     this.loading = false;
     console.log(this.prenotaz);
   }

  AddPrenotazione(nome: HTMLInputElement, cognome: HTMLInputElement , indirizzo:HTMLInputElement  , telefono: HTMLInputElement, email: HTMLInputElement, dataPrenotaz: HTMLInputElement , oraPrenotaz: HTMLInputElement): boolean {

  var disponibPosto = true;
  for(var i = 0; i < this.prenotaz.length; i++) {
      if ((this.prenotaz[i].dataPrenotaz /*proprieta*/ == dataPrenotaz.value) && (this.prenotaz[i].oraPrenotaz /*proprieta*/ == oraPrenotaz.value)) {
          disponibPosto = false;
          break;
      }
  }

  if (disponibPosto != true){

      this.prenotaz.push(new prenotaz(nome.value, cognome.value, indirizzo.value , telefono.value , email.value , dataPrenotaz.value , oraPrenotaz.value));

  }else{

    alert("Errore, il posto non è disponibile!");
}

    /*nome.value = '';
    cognome.value = '';
    indirizzo.value = '';
    telefono.value= '';
    email.value= '';
    data.value= '';
    ora.value= '';*/
    return false;
  }


}



