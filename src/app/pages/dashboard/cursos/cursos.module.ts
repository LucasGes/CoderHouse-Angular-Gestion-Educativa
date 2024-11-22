import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CourseDialogoComponent } from './components/course-dialogo/course-dialogo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { CourseDetallesDialogoComponent } from './components/course-detalles-dialogo/course-detalles-dialogo.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelect } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    CursosComponent,
    CourseDialogoComponent,
    CourseDetallesDialogoComponent,
    CourseDetallesDialogoComponent
  ],

  exports: [CursosComponent],

  imports: [
    CommonModule,
    CursosRoutingModule,
    MatIconModule,
    MatButton,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTableModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatSelect,
    MatOption,
    MatListModule 
   
    ]
    
})
export class CursosModule { }
