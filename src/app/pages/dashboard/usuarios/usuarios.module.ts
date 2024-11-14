import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SharedModule } from "../../../shared/shared.module";
import { UsuariosDialogoComponent } from './components/usuarios-dialogo/usuarios-dialogo.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { UsuariosDetallesDialogoComponent } from './components/usuarios-detalles-dialogo/usuarios-detalles-dialogo.component';


@NgModule({
  declarations: [UsuariosComponent, UsuariosDialogoComponent, UsuariosDetallesDialogoComponent],

  exports: [UsuariosComponent],

  imports: [
    CommonModule,
    UsuariosRoutingModule,
    RouterModule,
    MatIconModule,
    MatButton,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    SharedModule,
    MatSelectModule,
    MatCardModule,
    
    
]
})
export class UsuariosModule { }
