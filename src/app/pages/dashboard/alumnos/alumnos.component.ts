import { Component, OnInit } from '@angular/core';
import { AlumnosDialogoComponent } from './components/alumnos-dialogo/alumnos-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from './models';
import { generateID } from '../../../shared/utils';
import { AlumnosService } from '../../../core/services/alumnos.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { AlumnosDetallesDialogoComponent } from './components/alumnos-detalles-dialogo/alumnos-detalles-dialogo.component';
import { CursosService } from '../../../core/services/cursos.service';
import { Curso } from '../cursos/models';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent implements OnInit {

  constructor(

    private matDialog: MatDialog,
    private alumnosService: AlumnosService,
    private snackBar: MatSnackBar,
    private httpClient: HttpClient,
    private cursoService: CursosService) { }

  ngOnInit(): void {
    this.loadAlumnos();
  }


  loadAlumnos() {

    this.alumnosService.getAlumnos().subscribe({
      next: (alumnos) => {
        this.dataSource = alumnos;
      }
    })

  }

  nombreAlumno = ""

  openDialog(): void {
    this.matDialog.open(AlumnosDialogoComponent).afterClosed().subscribe({

      next: (value) => {

        this.nombreAlumno = value.name;

        value['id'] = generateID(4);


        this.alumnosService.addAlumno(value).pipe(tap(() => this.loadAlumnos())).subscribe();
      }
    })
  }

  displayedColumns: string[] = ['id', 'nombreCompleto', 'fechaInscripcion', 'acciones'];
  dataSource: Alumno[] = [];

  editarAlumno(alumnoAEditar: Alumno) {
    this.matDialog.open(AlumnosDialogoComponent, { data: alumnoAEditar }).afterClosed().subscribe({
      next: (value) => {

        if (!!value) {
          this.alumnosService.editAlumno(alumnoAEditar.id, value).pipe(tap(() => { this.loadAlumnos() })).subscribe();
        }
      }
    });
  }

  verAlumno(alumno: Alumno) {
    this.matDialog.open(AlumnosDetallesDialogoComponent, { data: alumno }).afterClosed().subscribe({
      next: (value) => {

        if (!!value) {
          this.loadAlumnos();
        }
      }
    });
  }

  deleteAlumnobyID(id: string) {
    const snackBarRef = this.snackBar.open('¿Desea eliminar al alumno?', 'Eliminar', {
      duration: 2000,
      panelClass: 'error-snack-bar',
    });

    snackBarRef.onAction().subscribe(() => {

      this.alumnosService.deleteAlumno(id).pipe(
        tap(() => {
          this.loadAlumnos();  // Recargar lista de alumnos

          this.cursoService.getCursos().subscribe((cursos: Curso[]) => {
            cursos.forEach(curso => {
              
              if (curso.cantAlumnos.includes(id)) {
               
                curso.cantAlumnos = curso.cantAlumnos.filter(alumnoId => alumnoId !== id);

                this.cursoService.editCurso(curso.id, curso).subscribe();
              }
            });
          });


          this.snackBar.open('Alumno eliminado con éxito', 'Cerrar', {
            duration: 3000,
            panelClass: 'success-snack-bar',
          });
        })
      ).subscribe();
    });
    snackBarRef.afterDismissed().subscribe(info => {
      if (!info.dismissedByAction) {
        this.snackBar.open('Acción cancelada', 'Cerrar', {
          duration: 3000,
          panelClass: 'error-snack-bar',
        });
      }
    });
  }

}