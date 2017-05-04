import { Component, OnInit } from '@angular/core';
import { Oferta } from './oferta';

@Component({
  selector: 'app-lista-de-ofertas',
  templateUrl: './lista-de-ofertas.component.html',
  styleUrls: ['./lista-de-ofertas.component.css']
})
export class ListaDeOfertasComponent implements OnInit {
  ofertas: Array <Oferta> = [];

  oferta: Oferta = new Oferta ('Programador Junior','Lenguaje JavaScript, 4 meses de experiencia', 
    'https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300', 'LinkedIn', '03/05/2017', 'Madrid')
  oferta2: Oferta = new Oferta ('Programador Senior','Lenguaje JavaScript, 4 meses de experiencia', 
    'https://lh3.googleusercontent.com/00APBMVQh3yraN704gKCeM63KzeQ-zHUi5wK6E9TjRQ26McyqYBt-zy__4i8GXDAfeys=w300', 'LinkedIn', '04/05/2017', 'Madrid')

  

  constructor() { }

  ngOnInit() {
  }

}
