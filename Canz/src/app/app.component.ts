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

  constructor(public http: HttpClient) {
    this.riceviAlbum();

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
}
