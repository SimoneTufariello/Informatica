import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http'; //HTTP Client
import { Observable } from 'rxjs'; //OBSERVABLE

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit {

  constructor() { }

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  ngOnInit() {
  }

}
