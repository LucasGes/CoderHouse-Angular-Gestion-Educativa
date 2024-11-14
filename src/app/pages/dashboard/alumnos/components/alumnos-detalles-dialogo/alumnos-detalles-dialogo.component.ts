import { Component, Inject } from '@angular/core';
import { Alumno } from '../../models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alumnos-detalles-dialogo',
  templateUrl: './alumnos-detalles-dialogo.component.html',
  styleUrl: './alumnos-detalles-dialogo.component.scss'
})
export class AlumnosDetallesDialogoComponent {
  constructor (@Inject(MAT_DIALOG_DATA) public alumno: Alumno){};

}
