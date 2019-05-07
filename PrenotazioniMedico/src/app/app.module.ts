import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo HttpClientModule
import { AppComponent } from './app.component';
import { PrenotazComponent } from './prenotaz/prenotaz.component';
import { DettagliPrenotazComponent } from './dettagli-prenotaz/dettagli-prenotaz.component';

@NgModule({
  declarations: [
    AppComponent,
    PrenotazComponent,
    DettagliPrenotazComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
