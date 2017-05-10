import { Component, OnInit, Input } from '@angular/core';
import { Oferta } from '../lista-de-ofertas/oferta';
import { ServicioOfertaService } from '../lista-de-ofertas/servicio-oferta.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent {


 miFormulario: FormGroup; 

 constructor (private formBuilder: FormBuilder, private servicioOfertaService: ServicioOfertaService, private router: Router){
   this.miFormulario = formBuilder.group({
       'nombre': [''],
       'empresa': [''],
       'descripcion': [''],
       'ciudad': [''],
       'fecha':  [''],
       'imagen': ['']
 });

 }


anadirOferta() {
  console.log(this.miFormulario.value);
  this.servicioOfertaService.anadirOfertaEnviada(this.miFormulario.value);
  this.router.navigate(['/lista-de-ofertas']);


 }
 
}

