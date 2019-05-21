import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //Bootstrap
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; //client
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';//Importa Il modulo HttpClientModule
import { AgmCoreModule } from '@agm/core';
import { MappaComponent } from './mappa/mappa.component'; //Mappe

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrazioneComponent,
    MappaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzUI8LYmnHPyFrtRT8Q8IEREZfOygUl-U' //walter
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
