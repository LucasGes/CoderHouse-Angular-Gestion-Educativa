import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResaltadoDirective } from './directives/resaltado.directive';



@NgModule({
  declarations: [
    ResaltadoDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResaltadoDirective
  ]
})
export class SharedModule { }
