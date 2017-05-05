import { Routes, RouterModule } from '@angular/router';
import { OfertaItemComponent } from './lista-de-ofertas/oferta-item.component';
import { FormularioComponent } from './formulario/formulario.component'
import { OFERTA_ROUTES } from './lista-de-ofertas/oferta.routing';
import { AppComponent } from './app.component';
import { ListaDeOfertasComponent } from './lista-de-ofertas/lista-de-ofertas.component';

const APP_ROUTES: Routes = [
   { path: 'oferta-item/', redirectTo: '' },
   { path: 'oferta-item/:id', component: OfertaItemComponent, children: OFERTA_ROUTES },
   { path: '', component: ListaDeOfertasComponent },
   { path: 'formulario', component: FormularioComponent }

];

export const ROUTING = RouterModule.forRoot(APP_ROUTES); 
