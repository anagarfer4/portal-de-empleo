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
  @Input() posicion: number;
  @Input() ofertaAnadida: Oferta;

  items: Array<Oferta> = [];
  inscripcion = false;
  bloqueo = false;
  desactivar = false;

  constructor(private sos: ServicioOfertaService, private router: Router ) { }

  ngOnInit() {
    this.items = this.sos.devolverOferta();
  }

  
  navegarAFormulario() {
    this.router.navigate(['formulario']);
  }

  aplicar() {
    this.inscripcion = true;
  }

  bloquear() {
    this.desactivar = true;
    this.bloqueo = true;
  }

  eliminar(oferta: Oferta) {
    this.sos.eliminarOferta(oferta);
  }


}
