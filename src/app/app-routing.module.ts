import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CursosComponent } from './pages/dashboard/cursos/cursos.component';
import { AlumnosComponent } from './pages/dashboard/alumnos/alumnos.component';
import { DetalleAlumnoComponent } from './pages/dashboard/alumnos/detalles/detalle-alumno/detalle-alumno.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { InscripcionesComponent } from './pages/dashboard/inscripciones/inscripciones.component';

const routes: Routes = [
 
  {path: 'auth', 
    component: LoginComponent,
  },
  
  {path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'home',
        component: HomeComponent
      },
      {path: 'cursos',
        component: CursosComponent
      },
      {path: 'alumnos',
        component: AlumnosComponent
 
      },
      {path: 'alumnos/:id',
        component: DetalleAlumnoComponent
      },
      {path: 'inscripciones',
        component: InscripcionesComponent,
      },
      
      {path:'**',
        redirectTo: "/dashboard/home"
      },
     
    ]
  },
  {path:'**',
    redirectTo: "/auth"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
