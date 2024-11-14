import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CourseDetallesDialogoComponent } from './components/course-detalles-dialogo/course-detalles-dialogo.component';


const routes: Routes = [  {
  path: '',
  component: CursosComponent,
  },
  {
    path: ':id',
    component: CourseDetallesDialogoComponent,
    
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
