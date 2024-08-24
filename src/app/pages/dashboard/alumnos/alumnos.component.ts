import { Component, OnInit, Pipe } from '@angular/core';
import { AlumnosDialogoComponent } from './components/alumnos-dialogo/alumnos-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from './models';
import { generateID } from '../../../shared/utils';
import { AlumnosService } from '../../../core/services/alumnos.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { tap } from 'rxjs';




@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent implements OnInit {

  isLoading = false;

  constructor(private matDialog: MatDialog, private AlumnosService: AlumnosService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadAlumnos();
  }
  loadAlumnos() {
    this.isLoading = true;
    this.AlumnosService.getAlumnos().subscribe({
      next: (alumnos) => {
        this.dataSource = alumnos;
      },
      complete: () => {
        this.isLoading = false;
      }
    })

  }


  nombreCurso = ""


  openDialog(): void {
    this.matDialog.open(AlumnosDialogoComponent).afterClosed().subscribe({

      next: (value) => {

        this.nombreCurso = value.name;

        value['id'] = generateID(4);

        this.isLoading = true;
        this.AlumnosService.addAlumno(value).pipe(tap(() => this.loadAlumnos())).subscribe();
      }
    })
  }


  displayedColumns: string[] = ['id', 'nombreCompleto', 'fechaInscripcion', 'acciones'];
  dataSource: Alumno[] = [];

  editarAlumno(alumnoAEditar: Alumno) {
    this.matDialog.open(AlumnosDialogoComponent, { data: alumnoAEditar }).afterClosed().subscribe({
      next: (value) => {
        this.isLoading = true;
        if (!!value) {
          this.AlumnosService.editAlumno(alumnoAEditar.id, value).pipe(tap(() => { this.loadAlumnos() })).subscribe();
        }
      }
    });

  }


  deleteAlumnobyID(id: string) {
    if (confirm('Desea eliminar el alumno?')) {
      this.isLoading = true;

      this.AlumnosService.deleteAlumno(id).pipe(tap(() => { this.loadAlumnos() })).subscribe();
    }
  }

}
