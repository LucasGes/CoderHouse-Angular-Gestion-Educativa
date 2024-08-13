import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosComponent } from './alumnos.component';

import {MatIconModule} from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AlumnosDialogoComponent } from './components/alumnos-dialogo/alumnos-dialogo.component';
import { SharedModule } from '../../../shared/shared.module';
import { DetalleAlumnoComponent } from './detalles/detalle-alumno/detalle-alumno.component';
import { RouterModule } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  declarations: [AlumnosComponent, AlumnosDialogoComponent, DetalleAlumnoComponent ],

   exports: [AlumnosComponent  ],

  imports: [
    CommonModule,
    MatIconModule,
    MatButton,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    SharedModule,
    RouterModule,
    MatProgressSpinnerModule
  
  ]
})

export class AlumnosModule { }
