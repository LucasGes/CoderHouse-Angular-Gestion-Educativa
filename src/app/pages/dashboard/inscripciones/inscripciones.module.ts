import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InscripcionesDialogoComponent } from './components/inscripciones-dialogo/inscripciones-dialogo.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SharedModule } from '../../../shared/shared.module';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatActionList } from '@angular/material/list';
import { AlumnoDialogoComponent } from './components/alumno-dialogo/alumno-dialogo.component';
import { DesuscripcionesDialogoComponent } from './components/desuscripciones-dialogo/desuscripciones-dialogo.component';

@NgModule({
  declarations: [
    AlumnoDialogoComponent,
    InscripcionesComponent,
    InscripcionesDialogoComponent,
    DesuscripcionesDialogoComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    RouterModule,
    FormsModule,
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
    MatSelect,
    MatOption,
    MatButtonModule,
    MatNativeDateModule,
    MatActionList,
    ],
  exports: [
    InscripcionesComponent,
    AlumnoDialogoComponent,
    
]})
export class InscripcionesModule { }
