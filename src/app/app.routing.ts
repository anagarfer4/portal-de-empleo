import { Routes, RouterModule } from '@angular/router';
import { OfertaItemComponent } from './lista-de-ofertas/oferta-item.component';
import { FormularioComponent } from './formulario/formulario.component'
import { PagInicioComponent } from './pag-inicio/pag-inicio.component'
import { OFERTA_ROUTES } from './lista-de-ofertas/oferta.routing';
import { INICIO_ROUTES } from './pag-inicio/inicio.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component'; //aqui
import { ListaDeOfertasComponent } from './lista-de-ofertas/lista-de-ofertas.component';

const APP_ROUTES: Routes = [
   { path: 'oferta-item/', redirectTo: '' },
   { path: 'oferta-item/:id', component: OfertaItemComponent, children: OFERTA_ROUTES },
   { path: 'lista-de-ofertas', component: ListaDeOfertasComponent },
   { path: 'formulario', component: FormularioComponent },
   { path: '', component: PagInicioComponent },
   { path: 'lista-de-ofertas', component: HeaderComponent }, //aqui

];

export const ROUTING = RouterModule.forRoot(APP_ROUTES); 
