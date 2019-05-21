import { Component } from '@angular/core';
import { Observable } from 'rxjs'; //OBSERVABLE
import { HttpClient } from '@angular/common/http'; //HTTP Client
import { HttpHeaders } from '@angular/common/http'; //HTTPHEADERS Client
import { HttpParams } from '@angular/common/http'; //HTTPPARAMS Client

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProgettoFinale';
  public loginVisible: boolean;
  public registerVisible: boolean;
  public paragVisible: boolean;

  constructor(public http: HttpClient) {
    this.paragVisible = true;
  }

  public Log(): void {
    this.loginVisible = !this.loginVisible;
    this.paragVisible = false;
  }

  public Reg(): void {
    this.registerVisible = !this.registerVisible;
    this.paragVisible = false;
  }
}
