import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogoComponent } from './components/course-dialogo/course-dialogo.component';
import { CursosService } from '../../../core/services/cursos.service';
import { HttpClient } from '@angular/common/http';
import { generateID } from '../../../shared/utils';
import { Observable, tap } from 'rxjs';
import { Curso } from './models';
import { CourseDetallesDialogoComponent } from './components/course-detalles-dialogo/course-detalles-dialogo.component';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store';
import { Usuario } from '../usuarios/models';
import { selectAuthUser } from '../../../core/store/auth/auth.selectors';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  
  authUser$: Observable<Usuario | null>;

  constructor(private matDialog: MatDialog, private store: Store<RootState>, private cursosService: CursosService, private httpClient: HttpClient){

    this.authUser$ = this.store.select(selectAuthUser);

  }
  
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


  displayedColumns: string[] = ['id', 'nombre', 'docente', 'acciones'];
  dataSource: Curso[] = [];

  verCurso (course  : Curso){
    this.matDialog.open(CourseDetallesDialogoComponent, { data: course }).afterClosed().subscribe({
      next: (value) => {

        if (!!value) {
          this.loadCursos();
        }
      }
  });
  }

  editarCurso(cursoAEditar: Curso) {
    this.matDialog.open(CourseDialogoComponent, { data: cursoAEditar }).afterClosed().subscribe({
      next: (value) => {

        if (!!value) {
          this.cursosService.editCurso(cursoAEditar.id, value).pipe(tap(() => { this.loadCursos() })).subscribe();
        }
      }
    });

  }


  deleteCursobyID(id: string) {
    if (confirm('Desea eliminar el alumno?')) {
      this.cursosService.deleteCurso(id).pipe(tap(() => { this.loadCursos() })).subscribe();
    }
  }

}
