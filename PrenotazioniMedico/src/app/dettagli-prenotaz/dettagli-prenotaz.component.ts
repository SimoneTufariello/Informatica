import { Component, OnInit, Input } from '@angular/core';
import { prenotaz } from '../prenotaz/prenotaz.model';

@Component({
  selector: 'app-dettagli-prenotaz',
  templateUrl: './dettagli-prenotaz.component.html',
  styleUrls: ['./dettagli-prenotaz.component.css']
})
export class DettagliPrenotazComponent implements OnInit {
  @Input()  InputPrenotazione: prenotaz;
  constructor() { }

  ngOnInit() {
  }

}
