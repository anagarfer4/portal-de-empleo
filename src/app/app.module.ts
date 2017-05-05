import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ListaDeOfertasComponent } from './lista-de-ofertas/lista-de-ofertas.component';
import { OfertaItemComponent } from './lista-de-ofertas/oferta-item.component';
import { ServicioOfertaService } from './lista-de-ofertas/servicio-oferta.service';
import { AlertComponent } from './alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaDeOfertasComponent,
    OfertaItemComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServicioOfertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
