import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http'; //HTTP Client
import { Observable } from 'rxjs'; //OBSERVABLE


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mex: String;
  data: Object;
   //@Input() loginVisible: boolean;
  public loginVisible: boolean;
  public mappaVisible: boolean;

  constructor(public http: HttpClient) {
    this.loginVisible = true;
    this.mappaVisible = false;
  }

 LogUser(username: HTMLInputElement, password:HTMLInputElement):boolean{

     console.log(username);
     console.log(password);
    this.LogUserP(username.value, password.value);
    return false;
}

LogUserP(username:string, password:string): void {

   const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

    });

    const params = new HttpParams()
          .set('username', username)
          .set('password', password);


      const options = {
      headers,
      params,
      withCredentials: false
    };



   this.http.post('https://3001-c58ed4f4-a087-4683-bc1d-2e35d72adad7.ws-eu0.gitpod.io/login',null, options  )
     .subscribe(data => {

       this.data = data;

        if(data == true){
          this.mex = "Login avvenuto correttamente.";
          this.loginVisible = false;
          this.mappaVisible = true;
       }else{
          this.mex = "Errore nel login, riprova.";
       }

     });
  }

  ngOnInit() {
  }

}
