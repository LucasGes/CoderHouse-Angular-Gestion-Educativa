import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from '../../models';

@Component({
  selector: 'app-detalles-dialogo',
  templateUrl: './usuarios-detalles-dialogo.component.html',
  styleUrl: './usuarios-detalles-dialogo.component.scss'
})
export class UsuariosDetallesDialogoComponent {
  constructor (@Inject(MAT_DIALOG_DATA) public user: Usuario){};

}
