import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AlumnosComponent } from './alumnos.component';

import {MatIconModule} from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [AlumnosComponent ],

   exports: [AlumnosComponent  ],

  imports: [
    CommonModule,
     MatIconModule,
    MatButton,
    MatDialogModule,
    MatTableModule
  ]
})

export class AlumnosModule { }
