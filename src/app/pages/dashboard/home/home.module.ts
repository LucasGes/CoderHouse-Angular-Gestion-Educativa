import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [HomeComponent],
  
  exports: [HomeComponent, ],

  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
  ]
})
export class HomeModule { }
