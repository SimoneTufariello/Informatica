import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http'; //HTTP Client
import { Observable } from 'rxjs'; //OBSERVABLE
import { CookieService } from 'ngx-cookie-service'; //COOKIE

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
  public cookie: boolean;

  constructor(public http: HttpClient, private cookieService: CookieService) {
    this.loginVisible = true;
    this.mappaVisible = false;

  }



LogUser(username:string, password:string): void {

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

        if(data == false){
          this.mex = "Errore nel login, riprova.";
       }else{
          this.mex = "Login avvenuto correttamente.";
          console.log(data);
          this.cookieService.set( 'Utente', data[0].ID );
          this.loginVisible = false;
          this.mappaVisible = true;
       }

     });
  }

  ngOnInit() {
  }

}
