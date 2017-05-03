import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from './oferta';

@Component({
  selector: 'app-oferta-item',
  templateUrl: './oferta-item.component.html',
  styleUrls: ['./oferta-item.component.css']
})
export class OfertaItemComponent implements OnInit {
  @Input () oferta: Oferta;

  constructor() { }

  ngOnInit() {
  }

}
