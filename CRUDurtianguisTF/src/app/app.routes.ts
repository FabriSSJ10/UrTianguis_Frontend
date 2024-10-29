import { Routes } from '@angular/router';
import { NotificacionComponent } from './components/notificacion/notificacion.component';
import { CreareditarnotificacionComponent } from './components/notificacion/creareditarnotificacion/creareditarnotificacion.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { CreareditardepartamentoComponent } from './components/departamento/creareditardepartamento/creareditardepartamento.component';
import { TipoocasionComponent } from './components/tipoocasion/tipoocasion.component';
import { CreareditartipoocasionComponent } from './components/tipoocasion/creareditartipoocasion/creareditartipoocasion.component';
import { TipopagoComponent } from './components/tipopago/tipopago.component';
import { CreareditartipopagoComponent } from './components/tipopago/creareditartipopago/creareditartipopago.component';
import { CreareditartipoprendaComponent } from './components/tipoprenda/creareditartipoprenda/creareditartipoprenda.component';
import { TipoPrendaComponent } from './components/tipoprenda/tipoprenda.component';

export const routes: Routes = [
  {
    path: 'departamentos',
    component: DepartamentoComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditardepartamentoComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreareditardepartamentoComponent,
      },
    ],
  },
  {
    path: 'notificaciones',
    component: NotificacionComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditarnotificacionComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreareditarnotificacionComponent,
      },
    ],
  },
  {
    path: 'tiposocasion',
    component: TipoocasionComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditartipoocasionComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreareditartipoocasionComponent,
      },
    ],
  },
  {
    path: 'tipospago',
    component: TipopagoComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditartipopagoComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreareditartipopagoComponent,
      },
    ],
  },
  {
    path: 'tiposprenda',
    component: TipoPrendaComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditartipoprendaComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreareditartipoprendaComponent,
      },
    ],
  },
];
