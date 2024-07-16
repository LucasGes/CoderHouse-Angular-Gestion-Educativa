import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CourseDialogoComponent } from './components/course-dialogo/course-dialogo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    CursosComponent,
    CourseDialogoComponent
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
   
    ]
    
})
export class CursosModule { }
