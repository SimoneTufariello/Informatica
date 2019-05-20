import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http'; //HTTP Client
import { Observable } from 'rxjs'; //OBSERVABLE
//import { HttpHeaders } from '@angular/common/http'; //HTTPHEADERS Client
//import { HttpParams } from '@angular/common/http'; //HTTPPARAMS Client

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  data: Object; //usato per post
  mex: String;
  constructor(public http: HttpClient) {}

 //bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb

 AddUser(username: HTMLInputElement, nome: HTMLInputElement, cognome: HTMLInputElement, email:HTMLInputElement, password:HTMLInputElement, Cpassword: HTMLInputElement, data: HTMLInputElement):boolean{

  if (password.value != Cpassword.value){
    this.mex = "Errore, le password non coincidono.";
    alert("a");
  }else{
    this.AddUserP(username.value, nome.value, cognome.value , email.value , password.value, data.value );
  }
  return false;
}

AddUserP(username:string, nome:string , cognome:string , email:string, password:string, data:string): void {

   const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });

 const params = new HttpParams()
      .set('username', username)
      .set('nome', nome)
      .set('cognome', cognome)
      .set('email', email)
      .set('password', password)
      .set('data', data);

      const options = {
      headers,
      params,
      withCredentials: false
    };



   this.http.post('https://3000-c58ed4f4-a087-4683-bc1d-2e35d72adad7.ws-eu0.gitpod.io/register',null, options  )
     .subscribe(data => {

       this.data = data;

        if(data == true){
          this.mex = "Registrazione avvenuta correttamente.";
          alert("aa");
       }else{
          this.mex = "Errore nella registrazione, riprova.";
          alert("ee");
       }

     });
 }

  ngOnInit() {
  }

}
