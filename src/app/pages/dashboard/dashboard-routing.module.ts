import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';


const routes: Routes = [
  {path: 'home',
    loadChildren: () => import ('./home/home.module').then((m) => m.HomeModule)
  },
  {path: 'cursos',
    loadChildren: () => import ('./cursos/cursos.module').then((m) => m.CursosModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import ('./alumnos/alumnos.module').then((m) => m.AlumnosModule)
    },

  {path: 'inscripciones',
    loadChildren: () => import ('./inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
  },
  
  {path:'**',
    redirectTo: "/dashboard/home"
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
