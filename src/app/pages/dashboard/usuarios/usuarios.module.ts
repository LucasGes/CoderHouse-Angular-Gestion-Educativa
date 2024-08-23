import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';


@NgModule({
  declarations: [UsuariosComponent],

  exports: [UsuariosComponent],

  imports: [
    CommonModule,
    UsuariosRoutingModule,
    RouterModule
  ]
})
export class UsuariosModule { }
