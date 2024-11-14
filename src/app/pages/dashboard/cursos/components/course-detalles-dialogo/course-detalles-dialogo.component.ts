import { Component, Inject, OnInit } from '@angular/core';
import { Curso } from '../../models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursosService } from '../../../../../core/services/cursos.service';

@Component({
  selector: 'app-course-detalles-dialogo',
  templateUrl: './course-detalles-dialogo.component.html',
  styleUrl: './course-detalles-dialogo.component.scss'
})
export class CourseDetallesDialogoComponent implements OnInit{
  constructor (@Inject(MAT_DIALOG_DATA) public course: Curso, private cursoService: CursosService,){};
  
  cursos : Curso[] = [];


  ngOnInit(): void {
  this.cargarCursos();
  }  
  
  
  cargarCursos(): void {
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos; 
    });
}
}
