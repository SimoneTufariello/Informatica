import { Component, OnInit, Input } from '@angular/core';
import { songlist } from './songlist.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent implements OnInit {

  constructor() { }

  @Input() album: songlist

  ngOnInit() {
  }

}
