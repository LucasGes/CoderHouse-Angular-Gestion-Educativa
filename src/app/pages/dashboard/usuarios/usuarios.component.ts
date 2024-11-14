import { Component, InjectionToken, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from './models';
import { generateID } from '../../../shared/utils';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { UsuariosService } from '../../../core/services/usuarios.service';
import { UsuariosDialogoComponent } from './components/usuarios-dialogo/usuarios-dialogo.component';
import { ActivatedRoute } from '@angular/router';
import { UsuariosDetallesDialogoComponent } from './components/usuarios-detalles-dialogo/usuarios-detalles-dialogo.component';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})


export class UsuariosComponent implements OnInit { 



  constructor(
    private matDialog: MatDialog, 
    private usuariosService: UsuariosService, 
    private httpClient: HttpClient, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadUsuarios();
  }
  loadUsuarios() {

    this.usuariosService.getUsuarios().subscribe({
      next: (usuarios) => {
        this.dataSource = usuarios;
      }    
    })

  }

  generateRandomToken(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
  }
  


  nombreUsuario = ""
 


  openDialog(): void {
    this.matDialog.open(UsuariosDialogoComponent).afterClosed().subscribe({

      next: (value) => {

        this.nombreUsuario = value.name;

        value['id'] = generateID(4);
        value['token'] = this.generateRandomToken(16);
      


        this.usuariosService.addUsuario(value).pipe(tap(() => this.loadUsuarios())).subscribe();
      }
    })
  }

  displayedColumns: string[] = ['id', 'nombreCompleto', 'rol', 'acciones'];
  dataSource: Usuario[] = [];


  editarUsuario (usuarioAEditar: Usuario) {
    this.matDialog.open(UsuariosDialogoComponent, { data: usuarioAEditar }).afterClosed().subscribe({
      next: (value) => {

        if (!!value) {
          this.usuariosService.editUsuario(usuarioAEditar.id, value).pipe(tap(() => { this.loadUsuarios() })).subscribe();
        }
      }
    });
  }

  verUsuario (usuario  : Usuario){
    this.matDialog.open(UsuariosDetallesDialogoComponent, { data: usuario }).afterClosed().subscribe({
      next: (value) => {

        if (!!value) {
          this.loadUsuarios();
        }
      }
  });
};
  


  deleteUsuariobyID(id: string) {
    if (confirm('Desea eliminar el usuario?')) {
      this.usuariosService.deleteUsuario(id).pipe(tap(() => { this.loadUsuarios() })).subscribe();
    }
  }

}
