import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../../core/services/alumnos.service';
import { Alumno } from '../alumnos/models';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionesDialogoComponent } from './components/inscripciones-dialogo/inscripciones-dialogo.component';
import { DesuscripcionesDialogoComponent } from './components/desuscripciones-dialogo/desuscripciones-dialogo.component';


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
}
