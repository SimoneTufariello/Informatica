import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http

import { AppComponent } from './app.component';
import { SonglistComponent } from './songlist/songlist.component';
import { DettaglialbumComponent } from './dettaglialbum/dettaglialbum.component';

@NgModule({
  declarations: [
    AppComponent,
    SonglistComponent,
    DettaglialbumComponent
  ],
  imports: [
    BrowserModule, HttpClientModule //Aggiungi il modulo http qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
