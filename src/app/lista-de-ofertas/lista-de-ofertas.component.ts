import { Component, OnInit } from '@angular/core';
import { Oferta } from './oferta';
import { ServicioOfertaService } from './servicio-oferta.service';

@Component({
  selector: 'app-lista-de-ofertas',
  templateUrl: './lista-de-ofertas.component.html',
  styleUrls: ['./lista-de-ofertas.component.css']

})
export class ListaDeOfertasComponent implements OnInit {
  ofertas: Array<Oferta> = [];

  constructor(private servicioOfertaService: ServicioOfertaService) { }

  ngOnInit() {
    this.ofertas = this.servicioOfertaService.devolverOferta();
  }

}
