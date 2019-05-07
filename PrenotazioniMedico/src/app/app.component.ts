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
  data: Object; //usato per post
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
     this.oPren = this.http.get<prenotaz[]>('https://my-json-server.typicode.com/SimoneTufariello/DBMedico/prenotazioni');
     this.oPren.subscribe(this.getData);
   }

   getData = (d : prenotaz[]) =>
   {
     this.prenotaz = d;
     this.loading = false;
     console.log(this.prenotaz);
   }

  AddPrenotazione(nome: HTMLInputElement, cognome: HTMLInputElement , indirizzo:HTMLInputElement  , telefono: HTMLInputElement, email: HTMLInputElement, dataPrenotaz: HTMLInputElement , oraPrenotaz: HTMLInputElement): boolean {

  var disponibPosto = true;
console.log("ciao");
console.log(this.prenotaz);
  for(var i = 0; i < this.prenotaz.length; i++) {
      console.log(this.prenotaz[i]);
      if ((this.prenotaz[i].dataPrenot /*proprieta*/ == dataPrenotaz.value) && (this.prenotaz[i].oraPrenot /*proprieta*/ == oraPrenotaz.value)) {
          disponibPosto = false;
          break;
      }


  }

  if (disponibPosto == true){

      this.prenotaz.push(new prenotaz(nome.value, cognome.value, indirizzo.value , telefono.value , email.value , dataPrenotaz.value , oraPrenotaz.value));

  }else{

    alert("Errore, il posto non è disponibile!");
  }

    /*nome.value = '';
    cognome.value = '';
    indirizzo.value = '';
    telefono.value= '';
    email.value= '';*/
    dataPrenotaz.value= '';
    oraPrenotaz.value= '';
    return false;
  }


}



