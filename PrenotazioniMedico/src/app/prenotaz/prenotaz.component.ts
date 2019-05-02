import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {prenotaz} from './prenotaz.module';

@Component({
  selector: 'app-prenotaz',
  templateUrl: './prenotaz.component.html',
  styleUrls: ['./prenotaz.component.css']
})
export class PrenotazComponent implements OnInit {
  prenotazData : prenotaz[];
  data: Object;
  loading: boolean;
  o: Observable<Object>;
  oFoo : Observable<prenotaz[]>;
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

}
