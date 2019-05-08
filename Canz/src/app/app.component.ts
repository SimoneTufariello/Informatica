import { Component } from '@angular/core';
import { Observable } from 'rxjs'; //OBSERVABLE
import { HttpClient } from '@angular/common/http'; //HTTP Client
import { songlist } from './songlist/songlist.model'; //MODEL

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  album : songlist[]; //Stesso nome model
  data: Object; //usato per post
  loading: boolean;
  oAlbum: Observable<Object>;
  public isViewable: boolean;

  constructor(public http: HttpClient) {
    this.riceviAlbum();
    this.isViewable = true;
  }

  riceviAlbum(): void {
     console.log("here");
     this.loading = true;
     this.oAlbum = this.http.get<songlist[]>('https://my-json-server.typicode.com/malizia-g/hotel/songlist');
     this.oAlbum.subscribe(this.getData);
   }

   getData = (d : songlist[]) =>
   {
     this.album = d;
     this.loading = false;
     console.log(this.album);
   }

   AddAlbum(id: HTMLInputElement, titoloA: HTMLInputElement , artista:HTMLInputElement  , durataA: HTMLInputElement, dataUscita: HTMLInputElement, durataC: HTMLInputElement , titoloC: HTMLInputElement): boolean {

    console.log(this.album);
    this.album.push(new songlist(Number(id.value), titoloA.value, artista.value , Number(durataA.value) , dataUscita.value , Number(durataC.value) , titoloC.value));

    return false;
   }

    albumDettagliato:songlist; //Stesso nome model


    dettagliare(albumDettagliato:songlist){
      this.albumDettagliato = albumDettagliato;
  }

  public toggle(): void { this.isViewable = !this.isViewable; }

}
