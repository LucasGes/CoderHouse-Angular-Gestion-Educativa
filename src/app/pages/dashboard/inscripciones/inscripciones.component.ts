import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../../core/services/alumnos.service';
import { Alumno } from '../alumnos/models';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionesDialogoComponent } from './components/inscripciones-dialogo/inscripciones-dialogo.component';
import { DesuscripcionesDialogoComponent } from './components/desuscripciones-dialogo/desuscripciones-dialogo.component';
import { AlumnoDialogoComponent } from './components/alumno-dialogo/alumno-dialogo.component';
import { generateID } from '../../../shared/utils';
import { tap } from 'rxjs';


@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {
  isLoading: boolean = true; 
  totalAlumnos: number = 0;
  totalCursos: number = 0;
  displayedColumns: string[] = ['totalAlumnos', 'totalCursos']; 
  alumnos: Alumno[] = []; 
  

  constructor(private alumnosService: AlumnosService, private matDialog: MatDialog,) {}

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos(): void {
    
    this.alumnosService.getAlumnos().subscribe(
      alumnos => {
        this.alumnos = alumnos; 
        this.totalAlumnos = alumnos.length; 
        this.isLoading = false; 
        
      }
    );
  }

  openDialogI(): void {
    this.matDialog.open(InscripcionesDialogoComponent)

  }

  openDialogD(): void {
    this.matDialog.open(DesuscripcionesDialogoComponent)
       
  }
  
  nombreAlumno = '';
  dataSource: Alumno[] = [];
  selectedAlumnoId: string = '';

  loadAlumnos() {

    this.alumnosService.getAlumnos().subscribe({
      next: (alumnos) => {
        this.dataSource = alumnos;
      }    
    })
  
  }

  openDialog(): void {
    this.matDialog.open(AlumnoDialogoComponent).afterClosed().subscribe({
  
      next: (value) => {
  
        this.nombreAlumno = value.name;
  
        value['id'] = generateID(4);
  
  
        this.alumnosService.addAlumno(value).pipe(
          tap(() => {
            this.loadAlumnos();
            this.cargarAlumnos();
            this.selectedAlumnoId = '';
          })
  
        ).subscribe();
      }
    })
  }
}
