import { Component, Inject, OnInit } from '@angular/core';
import { Curso } from '../../models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursosService } from '../../../../../core/services/cursos.service';
import { Alumno } from '../../../alumnos/models';
import { AlumnosService } from '../../../../../core/services/alumnos.service';

@Component({
  selector: 'app-course-detalles-dialogo',
  templateUrl: './course-detalles-dialogo.component.html',
  styleUrl: './course-detalles-dialogo.component.scss'
})
export class CourseDetallesDialogoComponent implements OnInit{
  constructor (
    @Inject(MAT_DIALOG_DATA) 
    public course: Curso, 
    private cursoService: CursosService, 
    private alumnoService: AlumnosService){};
  
  cursos : Curso[] = [];
  alumnos: Alumno[] = [];
  alumnosInscritos: Alumno[] = []; 
  selectedAlumnoId: string = '';
  lista: boolean = false;


  ngOnInit(): void {
  this.cargarCursos();
  this.cargarAlumnos();
  }  
  
  
  cargarCursos(): void {
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos; 
    });
   }

   cargarAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe(alumnos => {
      this.alumnos = alumnos;

            this.alumnosInscritos = this.alumnos.filter(alumno =>
        this.course.cantAlumnos?.includes(alumno.id)
      );
    });
  }

  mostrarLista() {
    this.lista = !this.lista;
  }


}
