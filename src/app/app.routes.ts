import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio.component';
import { ConocenosComponent } from './pages/conocenos.component';
import { ServiciosComponent } from './pages/servicios.component';

export const routes: Routes = [
  { path: '', component: InicioComponent, title: 'Inicio | Grupo Menéndez' },
  { path: 'conocenos', component: ConocenosComponent, title: 'Conócenos | Grupo Menéndez' },
  { path: 'servicios', component: ServiciosComponent, title: 'Servicios | Grupo Menéndez' },
  { path: '**', redirectTo: '' }
];
