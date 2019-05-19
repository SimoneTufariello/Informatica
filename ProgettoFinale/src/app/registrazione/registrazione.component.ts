import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //HTTP Client
import { Observable } from 'rxjs'; //OBSERVABLE
import { HttpHeaders } from '@angular/common/http'; //HTTPHEADERS Client

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  data: Object; //usato per post
  mex: String;
  constructor(public http: HttpClient) {}

  AddUser(username: HTMLInputElement, nome: HTMLInputElement, cognome: HTMLInputElement, email:HTMLInputElement, password:HTMLInputElement, Cpassword: HTMLInputElement, data: HTMLInputElement): boolean {

   this.http
     .post('http://node15.codenvy.io:49855/register',
       JSON.stringify({
         'username': username.value,
         'nome': nome.value,
         'cognome': cognome.value,
         'email': email.value,
         'password': password.value,
         'data': data.value
       }),
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*'
          })
     }).subscribe(data => {
       console.log(data)

          if (data == true) {
            this.mex = 'Registrazione effettuata correttamente.';
          } else {
            this.mex = "Errore nella registrazione, riprova.";
          }
     });

     return false;
 }

  ngOnInit() {
  }

}
