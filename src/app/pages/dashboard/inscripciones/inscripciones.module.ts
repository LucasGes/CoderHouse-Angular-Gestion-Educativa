import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InscripcionesDialogoComponent } from './components/inscripciones-dialogo/inscripciones-dialogo.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesDialogoComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButton,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    SharedModule,



    ],
  exports: [
    InscripcionesComponent,
    
]})
export class InscripcionesModule { }
