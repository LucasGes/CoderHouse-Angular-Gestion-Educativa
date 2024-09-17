import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogoComponent } from './components/course-dialogo/course-dialogo.component';
import { CursosService } from '../../../core/services/cursos.service';
import { HttpClient } from '@angular/common/http';
import { generateID } from '../../../shared/utils';
import { tap } from 'rxjs';
import { Curso } from './models';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {

  constructor(private matDialog: MatDialog, private cursosService: CursosService, private httpClient: HttpClient){}
  
  ngOnInit(): void {
    this.loadCursos();
  }
  loadCursos() {

    this.cursosService.getCursos().subscribe({
      next: (cursos) => {
        this.dataSource = cursos;
      },
         })

  }


  nombreCurso = ""


  openDialog(): void {

    this.matDialog.open(CourseDialogoComponent).afterClosed().subscribe({

      next: (value) => {

        this.nombreCurso = value.name;

        value['id'] = generateID(4);


        this.cursosService.addCurso(value).pipe(tap(() => this.loadCursos())).subscribe();
      }
    })
  }


  displayedColumns: string[] = ['id', 'nombre', 'docente', 'alumnos', 'fechaInicio', 'fechaFin', 'acciones'];
  dataSource: Curso[] = [];

  editarAlumno(cursoAEditar: Curso) {
    this.matDialog.open(CourseDialogoComponent, { data: cursoAEditar }).afterClosed().subscribe({
      next: (value) => {

        if (!!value) {
          this.cursosService.editCurso(cursoAEditar.id, value).pipe(tap(() => { this.loadCursos() })).subscribe();
        }
      }
    });

  }


  deleteAlumnobyID(id: string) {
    if (confirm('Desea eliminar el alumno?')) {
      this.cursosService.deleteCurso(id).pipe(tap(() => { this.loadCursos() })).subscribe();
    }
  }

}
