import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http

import { AppComponent } from './app.component';
import { SonglistComponent } from './songlist/songlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SonglistComponent
  ],
  imports: [
    BrowserModule, HttpClientModule //Aggiungi il modulo http qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
