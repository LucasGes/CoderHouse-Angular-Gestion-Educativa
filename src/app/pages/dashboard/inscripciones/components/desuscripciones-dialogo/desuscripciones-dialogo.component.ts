import { Component, Inject, OnInit } from '@angular/core';
import { AlumnosService } from '../../../../../core/services/alumnos.service';
import { CursosService } from '../../../../../core/services/cursos.service';
import { Alumno } from '../../../alumnos/models';
import { Curso } from '../../../cursos/models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-desuscripciones-dialogo',
  templateUrl: './desuscripciones-dialogo.component.html',
  styleUrl: './desuscripciones-dialogo.component.scss'
})
export class DesuscripcionesDialogoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public alumno: Alumno,
    private alumnosService: AlumnosService,
    private cursoService: CursosService,
    private snackBar: MatSnackBar,

  ) { }

  alumnos: Alumno[] = [];
  cursos: Curso[] = [];
  cursosInscriptos: Curso[] = [];
  selectedAlumnoId: string = '';
  selectedCursoId: string = '';

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
      this.cursosInscriptos = [];
      return;
    }

    const alumno = this.alumnos.find(a => a.id === this.selectedAlumnoId);

    if (alumno) {
      this.cursoService.getCursos().subscribe(cursos => {

        this.cursosInscriptos = cursos.filter(curso => alumno.cursos?.includes(curso.nombre));
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
      this.snackBar.open('Seleccionar un alumno y un curso', 'Cerrar', {
        duration: 3000,
        panelClass: 'error-snack-bar',
      });
      return;
    }

    const alumno = this.alumnos.find(a => a.id === this.selectedAlumnoId);
    const curso = this.cursosInscriptos.find(c => c.id === this.selectedCursoId);
    const cursoSeleccionado = this.cursosInscriptos.find(curso => curso.id === this.selectedCursoId);
    
    if (!alumno || !curso || !cursoSeleccionado) {
      this.snackBar.open('Alumno no encontrado', 'Cerrar', {
        duration: 3000,
        panelClass: 'error-snack-bar',
      });
      return;
    }

    const nombreCurso = cursoSeleccionado.nombre;

    alumno.cursos = alumno.cursos.filter(cursoNombre => cursoNombre !== nombreCurso);

    curso.cantAlumnos = curso.cantAlumnos.filter(alumnoId => alumnoId !== this.selectedAlumnoId);

    this.alumnosService.editAlumno(alumno.id, alumno).subscribe({

      next: () => {
        this.cursoService.editCurso(curso.id, curso).subscribe({
          next: () => {
            this.snackBar.open('Alumno desuscripto correctamente', 'Cerrar', {
              duration: 3000,
              panelClass: 'success-snack-bar',
            });
            this.cargarCursos();
            this.loadAlumnos();
          }
        });
      }
    })
  };


  onSubmit(): void {
    this.desuscribirAlumno();
  }

}




