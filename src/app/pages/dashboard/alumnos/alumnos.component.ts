import { Component, OnInit } from '@angular/core';
import { AlumnosDialogoComponent } from './components/alumnos-dialogo/alumnos-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Alumno } from './models';
import { generateID } from '../../../shared/utils';
import { AlumnosService } from '../../../core/services/alumnos.service';




@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent implements OnInit {

  isLoading = false;

  
  constructor(private matDialog: MatDialog, private AlumnosService: AlumnosService){}
  
ngOnInit(): void{
this.loadAlumnos();
}


loadAlumnos() {
  this.isLoading = true;
    this.AlumnosService.getAlumnos().subscribe({
      next:(alumnos) =>{
        this.dataSource = alumnos;
      },
      complete: () => {
       this.isLoading = false;
      }
    })
  
  }


  nombreCurso = ""

    
openDialog(): void{
  this.matDialog.open(AlumnosDialogoComponent).afterClosed().subscribe({

    next: (value) => {
      
      this.nombreCurso = value.name;

      value['id'] = generateID(4);

      this.isLoading = true;
      this.AlumnosService.addAlumno(value).subscribe({
        next: (alumnos) => {

          this.dataSource = [...alumnos];

        },
        
complete: () => {
  this.isLoading = false;
}
       
      })

      

    }
  })
}


  displayedColumns: string[] = ['id', 'nombreCompleto', 'fechaInscripcion',  'acciones'];
  dataSource: Alumno[] = [];

 editarAlumno(alumnoAEditar:Alumno){
this.matDialog.open(AlumnosDialogoComponent, {data: alumnoAEditar}).afterClosed().subscribe({
  next: (value) => {
    this.isLoading = true;
    if(!!value) {
      this.AlumnosService.editAlumno(alumnoAEditar.id, value).subscribe({
        next: (alumnos) => {
          this.dataSource = [...alumnos];},
        complete: () =>{
          this.isLoading = false;
        },


      })
    }
  }
 });

 } 


deleteAlumnobyID(id: string){
  if (confirm('Desea eliminar el alumno?')){
    this.isLoading= true;

  this.AlumnosService.deleteAlumno(id).subscribe({
    next: (alumnos) => {
      this.dataSource = [...alumnos];},
    complete: () =>{
      this.isLoading = false;
    },
    });
  }}

}
