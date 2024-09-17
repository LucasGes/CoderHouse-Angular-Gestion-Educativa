import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [  {
  path: '',
  component: CursosComponent,
  },
  {
    path: ':id',
    component: DetallesComponent,
    
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
