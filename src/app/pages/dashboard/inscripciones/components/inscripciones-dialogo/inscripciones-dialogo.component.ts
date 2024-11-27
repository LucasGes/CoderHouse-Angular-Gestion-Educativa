import { Component, Inject, OnInit } from '@angular/core';
import { AlumnosService } from '../../../../../core/services/alumnos.service';
import { Alumno } from '../../../alumnos/models';
import { CursosService } from '../../../../../core/services/cursos.service';
import { Curso } from '../../../cursos/models';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoDialogoComponent } from '../alumno-dialogo/alumno-dialogo.component';
import { generateID } from '../../../../../shared/utils';
import { tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-inscripciones-dialogo',
  templateUrl: './inscripciones-dialogo.component.html',
  styleUrl: './inscripciones-dialogo.component.scss'
})
export class InscripcionesDialogoComponent  implements OnInit {
  alumnos: Alumno[] = []; 
  cursos: Curso[] = [];
  selectedAlumnoId: string = '';
  selectedCursoId: string = '';
  


  constructor (
    private alumnosService: AlumnosService, 
    private cursoService: CursosService, 
    private snackBar: MatSnackBar,
    private matDialog: MatDialog, 
     ){}
  
  ngOnInit(): void {
    this.cargarAlumnos();
    this.cargarCursos();
    this.loadAlumnos();
  }

  cargarAlumnos(): void {
    this.alumnosService.getAlumnos().subscribe(alumnos => {
      this.alumnos = alumnos; 
    });
  }

    cargarCursos(): void {
      this.cursoService.getCursos().subscribe(cursos => {
        this.cursos = cursos; 
      });
}


onSubmit(): void {
  if (!this.selectedAlumnoId || !this.selectedCursoId) {
    this.snackBar.open('Complete todos los datos', 'Cerrar', {
      duration: 3000,
      panelClass: 'error-snack-bar',
  })
    return;
  }

  const curso = this.cursos.find(c => c.id === this.selectedCursoId);

   if (curso) {

   curso.cantAlumnos = curso.cantAlumnos || [];

    if (curso.cantAlumnos.includes(this.selectedAlumnoId)) {

      this.snackBar.open('Alumno ya inscripto en el curso', 'Cerrar', {
        duration: 3000,
        panelClass: 'error-snack-bar',
      })
             return;
    }


    else{

      curso.cantAlumnos.push(this.selectedAlumnoId);
  
    this.cursoService.editCurso(curso.id, curso).subscribe(() => {
      
      
      this.snackBar.open('Alumno inscripto correctamente en el curso', 'Cerrar', {
        duration: 3000,
        panelClass: 'success-snack-bar',
      })
    
    }).closed;


    const alumno = this.alumnos.find(a => a.id === this.selectedAlumnoId);
    if (alumno) {
      
      alumno.cursos = alumno.cursos ? [...alumno.cursos, curso.nombre] : [curso.nombre];
     
     
      this.alumnosService.editAlumno(alumno.id, alumno).subscribe();
    }
  }
}
}
nombreAlumno = "";
dataSource: Alumno[] = [];

loadAlumnos() {

  this.alumnosService.getAlumnos().subscribe({
    next: (alumnos) => {
      this.dataSource = alumnos;
    }    
  })

}


}