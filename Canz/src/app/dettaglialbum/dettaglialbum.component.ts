import { Component, OnInit, Input } from '@angular/core';
import { songlist } from '../songlist/songlist.model';

@Component({
  selector: 'app-dettaglialbum',
  templateUrl: './dettaglialbum.component.html',
  styleUrls: ['./dettaglialbum.component.css']
})
export class DettaglialbumComponent implements OnInit {

  constructor() { }

  @Input() albumDettagliato: songlist

  ngOnInit() {
  }

}
