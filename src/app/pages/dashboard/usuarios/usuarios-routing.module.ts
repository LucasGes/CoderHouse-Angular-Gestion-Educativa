import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosDetallesDialogoComponent } from './components/usuarios-detalles-dialogo/usuarios-detalles-dialogo.component';




const routes: Routes = [
{path: '',
component: UsuariosComponent,
},
{
  path:':id',
  component: UsuariosDetallesDialogoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
