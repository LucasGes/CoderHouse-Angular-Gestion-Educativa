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
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosDetallesDialogoComponent } from './components/alumnos-detalles-dialogo/alumnos-detalles-dialogo.component';
import { MatCardModule } from '@angular/material/card';
import { AlumnosDialogoComponent } from './components/alumnos-dialogo/alumnos-dialogo.component';




@NgModule({
  declarations: [AlumnosComponent, AlumnosDetallesDialogoComponent, AlumnosDialogoComponent,  ],

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
    MatProgressSpinnerModule,
    AlumnosRoutingModule,
    MatCardModule

  ]
})

export class AlumnosModule { }
