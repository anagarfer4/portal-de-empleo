import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header.component';
import { ListaDeOfertasComponent } from './lista-de-ofertas/lista-de-ofertas.component';
import { OfertaItemComponent } from './lista-de-ofertas/oferta-item.component';
import { ServicioOfertaService } from './lista-de-ofertas/servicio-oferta.service';
import { FormularioComponent } from './formulario/formulario.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { BuscadorPipe } from './buscador.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaDeOfertasComponent,
    OfertaItemComponent,
    FormularioComponent,
    PagInicioComponent,
    BuscadorPipe,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [ServicioOfertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
