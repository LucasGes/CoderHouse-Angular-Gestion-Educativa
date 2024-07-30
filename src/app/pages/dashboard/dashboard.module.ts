import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CursosModule } from './cursos/cursos.module';
import {MatListModule} from '@angular/material/list';
import { SharedModule } from '../../shared/shared.module';
import { AlumnosModule } from './alumnos/alumnos.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CursosModule,
    MatListModule,
    SharedModule,
    AlumnosModule, 


  ]
})
export class DashboardModule { }
