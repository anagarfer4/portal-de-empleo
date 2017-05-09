import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../lista-de-ofertas/oferta';
import { ServicioOfertaService } from '../lista-de-ofertas/servicio-oferta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
@Input () oferta: Oferta;
 
 ofertas: Array<Oferta> = [];
   constructor(private sos: ServicioOfertaService, private router: Router) { }

  ngOnInit() {
  
    this.ofertas= this.sos.devolverOferta();
  }
anadirOferta(oferta: Oferta){

   this.sos.anadirOfertaEnviada(oferta);
   this.sos.devolverOferta();
   this.router.navigate(['lista-de-ofertas']);
 }
 
}






