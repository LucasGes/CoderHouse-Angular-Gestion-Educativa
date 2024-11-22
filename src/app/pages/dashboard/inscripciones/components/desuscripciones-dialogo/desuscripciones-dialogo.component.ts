import { Component, Inject, OnInit } from '@angular/core';
import { AlumnosService } from '../../../../../core/services/alumnos.service';
import { CursosService } from '../../../../../core/services/cursos.service';
import { Alumno } from '../../../alumnos/models';
import { Curso } from '../../../cursos/models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
      alert('Por favor, seleccione un alumno y un curso.');
      return;
    }


    const alumno = this.alumnos.find(a => a.id === this.selectedAlumnoId);

    if (alumno) {

      alumno.cursos = alumno.cursos.filter(curso => curso !== this.selectedCursoId);

      this.alumnosService.editAlumno(alumno.id, alumno).subscribe({
        next: () => {
          alert('Alumno desuscripto con éxito');
          this.cargarCursos();
          this.loadAlumnos();
        },
        error: () => {
          alert('Error al desuscribir al alumno');
        }
      });
    }
  }

  onSubmit(): void {
    this.desuscribirAlumno();
  }

}




