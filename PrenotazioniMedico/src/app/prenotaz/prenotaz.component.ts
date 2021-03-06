import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {prenotaz} from './prenotaz.model';

@Component({
  selector: 'app-prenotaz',
  templateUrl: './prenotaz.component.html',
  styleUrls: ['./prenotaz.component.css']
})
export class PrenotazComponent implements OnInit {

  @Input() prenotazione: prenotaz

  ngOnInit() {
  }

}
