import { Component } from '@angular/core';
import { AlumnosDialogoComponent } from './components/alumnos-dialogo/alumnos-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { Alumnos } from './models';



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})
export class AlumnosComponent {

  
  constructor(private matDialog: MatDialog){}
  
openDialog(): void{
  this.matDialog.open(AlumnosDialogoComponent);
  }

  displayedColumns: string[] = ['id', 'nombre', 'startDate', 'endDate'];
  dataSource: Alumnos[] = [
    
    {id: '001',
     nombre: 'Fernando Sosa',
     startDate: new Date(), 
     endDate: new Date(),
    },
    {id: '002',
      nombre: 'Juan Perez',
      startDate: new Date(), 
      endDate: new Date(),
     },
     {id: '003',
      nombre: 'Felipe Garcia',
      startDate: new Date(), 
      endDate: new Date(),
     },
     {id: '004',
      nombre: 'Gustavo Lopez',
      startDate: new Date(), 
      endDate: new Date(),
     }
  
  ];
}

