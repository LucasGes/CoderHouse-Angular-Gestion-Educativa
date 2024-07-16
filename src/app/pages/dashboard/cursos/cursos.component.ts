import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogoComponent } from './components/course-dialogo/course-dialogo.component';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  nombreCurso = ""

  constructor(private matDialog: MatDialog){}
  
openDialog(): void{
  this.matDialog.open(CourseDialogoComponent).afterClosed().subscribe({
    next: (value) => {
      console.log('RECIBIMOS ESTE VALOR: ', value);

      this.nombreCurso = value.name;

    }
  })
}
}
