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
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  
  authUser$: Observable<Usuario | null>;

  constructor(
    
    private matDialog: MatDialog, 
    private store: Store<RootState>, 
    private cursosService: CursosService, 
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
  ){

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

    const snackBarRef = this.snackBar.open('¿Desea eliminar el curso?', 'Eliminar',  {
      duration: 2000, 
      panelClass: 'warning-snack-bar',
    });
  snackBarRef.onAction().subscribe(() => {
    this.cursosService.deleteCurso(id).pipe(
      tap(() => { 
        this.loadCursos(); 
        this.snackBar.open('Curso eliminado con éxito', 'Cerrar', {
      duration: 3000,
      panelClass: 'success-snack-bar',
    }); })).subscribe();
  });

  snackBarRef.afterDismissed().subscribe(info => {
    if (!info.dismissedByAction) {
      this.snackBar.open('Acción cancelada', 'Cerrar', {
        duration: 3000,
        panelClass: 'info-snack-bar',
      });
    }
  });
  

  }


}
