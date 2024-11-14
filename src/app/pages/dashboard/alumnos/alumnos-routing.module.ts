import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosDetallesDialogoComponent } from './components/alumnos-detalles-dialogo/alumnos-detalles-dialogo.component';



const routes: Routes = [
  {
path: '',
component: AlumnosComponent
  },
{
path: ':id',
component: AlumnosDetallesDialogoComponent

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
