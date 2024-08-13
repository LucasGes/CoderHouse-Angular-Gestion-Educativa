import { Component, OnInit } from '@angular/core';
import { InscripcionesDialogoComponent } from './components/inscripciones-dialogo/inscripciones-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { generateID } from '../../../shared/utils';
import { InscripcionesService } from './../../../core/services/inscripciones.service';
import { Inscripcion } from './models/index';



@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent implements OnInit {


  loadInscripciomnes() {
    this.isLoading = true;
      this.InscripcionesService.getInscripciones().subscribe({
        next:(inscripciones) =>{
          this.dataSource = inscripciones;
        },
        complete: () => {
         this.isLoading = false;
        }
      })
        }


  ngOnInit(): void{
    this.loadInscripciomnes();
    }

  isLoading = false;
  inscripciones: Inscripcion[] = [];
  

  constructor(private matDialog: MatDialog, private InscripcionesService: InscripcionesService){
  
    
  
    this.isLoading = true;
  this.InscripcionesService.getInscripciones().subscribe({
    next: (v) =>(this.inscripciones = v),
    complete: () =>(this.isLoading =false),
    })
  }
   
   
  displayedColumns: string[] = ['id', 'alumno', 'curso', 'fechaInscripcion', 'acciones'];
  dataSource: Inscripcion[] = [];
   insc = ""
        
openDialog(): void{
  this.matDialog.open(InscripcionesDialogoComponent).afterClosed().subscribe({

    next: (value) => {
      
      this.insc = value.name;

      value['id'] = generateID(4);

      this.isLoading = true;
      this.InscripcionesService.addAlumno(value).subscribe({
        next: (inscripciones) => {

          this.dataSource = [...inscripciones];

        },
        
complete: () => {
  this.isLoading = false;
}
       
      })

      

    }
  })
}

  }
