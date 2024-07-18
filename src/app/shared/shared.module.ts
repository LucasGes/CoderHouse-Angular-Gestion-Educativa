import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';



@NgModule({
  declarations: [
    ResaltadoDirective,
    NombreCompletoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResaltadoDirective,
    NombreCompletoPipe
  ]
})
export class SharedModule { }
