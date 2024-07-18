import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { TitleSizeDirective } from './directives/title-size.directive';


@NgModule({
  declarations: [
    NombreCompletoPipe,
    TitleSizeDirective
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
     NombreCompletoPipe,
     TitleSizeDirective
     

  ]
})
export class SharedModule { }
