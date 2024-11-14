import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../../../../core/services/alumnos.service';
import { CursosService } from '../../../../../core/services/cursos.service';
import { Alumno } from '../../../alumnos/models';
import { Curso } from '../../../cursos/models';

@Component({
  selector: 'app-desuscripciones-dialogo',
  templateUrl: './desuscripciones-dialogo.component.html',
  styleUrl: './desuscripciones-dialogo.component.scss'
})
export class DesuscripcionesDialogoComponent implements OnInit {
  alumnos: Alumno[] = []; 
  cursos: Curso[] = [];
  selectedAlumnoId: string = '';
  selectedCursoId: string = ''; 


  constructor (
    private alumnosService: AlumnosService, 
    private cursoService: CursosService, 
    
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
    if (!this.selectedAlumnoId) {
      this.cursos = []; 
      return;
    }
  
   
    const alumno = this.alumnos.find(a => a.id === this.selectedAlumnoId);
  
    if (alumno) {
      
      this.cursoService.getCursos().subscribe(cursos => {
        
        this.cursos = cursos.filter(curso => alumno.cursos.includes(curso.id));
      });
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


desuscribirAlumno(): void {

  if (!this.selectedAlumnoId || !this.selectedCursoId) {
    alert('Por favor, complete los campos obligatorios.');
    return;
  }

  // Encuentra al alumno seleccionado
  const alumno = this.alumnos.find(a => a.id === this.selectedAlumnoId);
  if (alumno) {
    // Elimina el curso seleccionado de la lista de cursos del alumno
    alumno.cursos = alumno.cursos.filter(cursoId => cursoId !== this.selectedCursoId);

    // Llama al servicio para actualizar el alumno en la base de datos
    this.alumnosService.editAlumno(alumno.id, alumno).subscribe({
      next: () => {
        alert('Alumno desuscripto con éxito');
        this.cargarCursos(); // Actualiza la lista de cursos disponibles en el selector
      },
      error: () => alert('Error al desuscribir al alumno')
    });
  }
}

onSubmit(): void {
  this.desuscribirAlumno();
}

}




