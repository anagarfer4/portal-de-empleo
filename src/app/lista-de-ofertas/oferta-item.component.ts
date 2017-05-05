import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from './oferta';
import { Router } from '@angular/router';
import { ServicioOfertaService } from './servicio-oferta.service';



@Component({
  selector: 'app-oferta-item',
  templateUrl: './oferta-item.component.html',
  styleUrls: ['./oferta-item.component.css']
})
export class OfertaItemComponent implements OnInit {
  @Input() oferta: Oferta;

  items: Array<Oferta> = [];
  

  constructor(private sos: ServicioOfertaService, private router: Router ) { }

  ngOnInit() {
    this.items = this.sos.devolverOferta();
  }

  ofertaEditada(oferta: string) {
    this.sos.editar(oferta);
  }
  navegarAFormulario() {
    this.router.navigate(['formulario']);
  }

  // enviarOferta(oferta: string) {
  //   this.sos.enviarOfertaEditada(oferta);
  // }
//añadir devolverOferta()//
//añadir enviarOfertaEditada()//
}
