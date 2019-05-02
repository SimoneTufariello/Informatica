import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Foo} from './foo.model';

@Component({
  selector: 'app-foo-component',
  templateUrl: './foo-component.component.html',
  styleUrls: ['./foo-component.component.css']
})
export class FooComponentComponent implements OnInit {

  fooData : Foo[];
  data: Object;
  loading: boolean;
  o: Observable<Object>;
  oFoo : Observable<Foo[]>;
  constructor(public http: HttpClient) { }

  makeRequest(): void {

    this.loading = true; //Notifichiamo che stiamo attendendo dei dati
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1'); //Facciamo una get e otteniamo l'oggetto Observable che attende la risposta

    this.o.subscribe(this.getData); //Attacchiamo all'Observable o un metodo "observer" che verrà lanciato quando arriva la risposta

  }

  //Il metodo che notifica la risposta (nota che usiamo una "arrow function")

  getData = (d: Object) => {
    this.data = d; //Notifico l’oggetto ricevuto dal server
    this.loading = false; // Notifico che ho ricevuto i dati
  }




   //Nota bene, questo è un metodo alternativo e compatto per fare la stessa cosa di
   //makeRequest senza dichiarare la variabile Observable e creando l’arrow function
   //direttamente dentro il metodo subscribe


  makeCompactRequest(): void {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  //L'operazione di post necessita un parametro in più.
  //Viene creata una stringa (JSON.strigify) a partire da un oggetto Typescript
  makeCompactPost(): void {
    this.loading = true;
    this.http
      .post('https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
        })
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makeTypedRequest() : void
  {
    //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
    this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
    this.oFoo.subscribe(data => {this.fooData = data;});
  }

  ngOnInit() {
  }

}
