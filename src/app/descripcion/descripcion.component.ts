import { Component, OnInit } from '@angular/core';
import { Oferta } from '../lista-de-ofertas/oferta';
import { ServicioOfertaService } from '../lista-de-ofertas/servicio-oferta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
private subscription: Subscription;
id: number;
oferta: Oferta;
  constructor(private service: ServicioOfertaService, private router: Router,
private activatedRoute: ActivatedRoute) { this.subscription = activatedRoute.params.subscribe(
(param: any) => {

   this.id = param['id'];
  this.oferta = this.service.devolverDescripcion(this.id);
}
); }


//devolverDescripcion(indice: number): Oferta { 
//return this.ofertas[indice];
//}

  ngOnInit() {
  }

}
