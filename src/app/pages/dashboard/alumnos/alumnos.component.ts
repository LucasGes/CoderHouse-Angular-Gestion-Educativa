import { Component, OnInit } from '@angular/core';
import { AlumnosDialogoComponent } from './components/alumnos-dialogo/alumnos-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from './models';
import { generateID } from '../../../shared/utils';
import { AlumnosService } from '../../../core/services/alumnos.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent implements OnInit {

  constructor(private matDialog: MatDialog, private alumnosService: AlumnosService, private httpClient: HttpClient) { }

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


  nombreCurso = ""


  openDialog(): void {
    this.matDialog.open(AlumnosDialogoComponent).afterClosed().subscribe({

      next: (value) => {

        this.nombreCurso = value.name;

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


  deleteAlumnobyID(id: string) {
    if (confirm('Desea eliminar el alumno?')) {
      this.alumnosService.deleteAlumno(id).pipe(tap(() => { this.loadAlumnos() })).subscribe();
    }
  }

}
