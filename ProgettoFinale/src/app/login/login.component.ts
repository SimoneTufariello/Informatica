import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //HTTP Client
import { Observable } from 'rxjs'; //OBSERVABLE
import { HttpHeaders } from '@angular/common/http'; //HTTPHEADERS Client

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mex: String;

  constructor(public http: HttpClient) {

  }

  ngOnInit() {
  }

}
