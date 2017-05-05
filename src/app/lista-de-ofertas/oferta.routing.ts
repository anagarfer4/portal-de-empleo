import { Routes } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component';
import { EditarOfertaGuard } from './editar-oferta.guard';
import { AnadirOfertaGuard } from './anadir-oferta.guard';

export const OFERTA_ROUTES: Routes = [
   { path: 'editar', component:FormularioComponent, canDeactivate: [EditarOfertaGuard] },
   { path: 'anadir', component: FormularioComponent, canActivate: [AnadirOfertaGuard] }
];
