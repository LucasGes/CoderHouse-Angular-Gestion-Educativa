import { Component } from '@angular/core';
import { AlumnosDialogoComponent } from './components/alumnos-dialogo/alumnos-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Alumnos } from './models';
import { generateID } from '../../../shared/utils';



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {

  
  constructor(private matDialog: MatDialog){}
  
  nombreCurso = ""

    
openDialog(): void{
  this.matDialog.open(AlumnosDialogoComponent).afterClosed().subscribe({

    next: (value) => {
      
      console.log('RECIBIMOS ESTE VALOR: ', value);

      this.nombreCurso = value.name;

      value['id'] = generateID(4);

      this.dataSource =[...this.dataSource, value];
      

    }
  })
}


  displayedColumns: string[] = ['id', 'nombreCompleto', 'fechaInscripcion',  'acciones'];
  dataSource: Alumnos[] = [
    
    {id: 'a3f5',
     nombre: 'Fernando',
     apellido: 'Sosa',
     fechaInscripcion: new Date(), 
        },

    {id: 'j3t5',
      nombre: 'Juan',
      apellido: 'Perez',
      fechaInscripcion: new Date(), 
        },

     {id: 'q12e',
      nombre: 'Felipe',
      apellido: 'Gonzalez',
      fechaInscripcion: new Date(), 
        },
     {id: 'y3r4',
      nombre: 'Gustavo',
      apellido: 'Lopez',
      fechaInscripcion: new Date(), 
        }
  
  ];

 editarAlumno(cursoAEditar:Alumnos){
this.matDialog.open(AlumnosDialogoComponent, {data: cursoAEditar}).afterClosed().subscribe({
  next: (value) => {
    if(!!value) {
      this.dataSource = this.dataSource.map( (el) => el.id === cursoAEditar.id ? {...value, id: cursoAEditar.id } : el);
    }
  }
 });

 } 


deleteAlumnobyID(id: string){
  if (confirm('Desea eliminar el alumno?')){
  this.dataSource = this.dataSource.filter((el) => el.id != id);
  }}

}
