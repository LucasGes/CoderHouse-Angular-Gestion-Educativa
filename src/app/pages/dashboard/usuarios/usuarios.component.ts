import { Component, InjectionToken, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from './models';
import { generateID } from '../../../shared/utils';
import { tap } from 'rxjs';
import { UsuariosService } from '../../../core/services/usuarios.service';
import { UsuariosDialogoComponent } from './components/usuarios-dialogo/usuarios-dialogo.component';
import { UsuariosDetallesDialogoComponent } from './components/usuarios-detalles-dialogo/usuarios-detalles-dialogo.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})


export class UsuariosComponent implements OnInit { 

  constructor(
    private matDialog: MatDialog, 
    private usuariosService: UsuariosService, 
    private snackBar: MatSnackBar) { }

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

    const snackBarRef = this.snackBar.open('¿Desea eliminar el usuario?', 'Eliminar',  {
      duration: 2000, 
      panelClass: 'warning-snack-bar',
    });
  snackBarRef.onAction().subscribe(() => {
    // El usuario hizo clic en "Eliminar"
    this.usuariosService.deleteUsuario(id).pipe(
      tap(() => {
        this.loadUsuarios(); 
        this.snackBar.open('Usuario eliminado con éxito', 'Cerrar', {
          duration: 3000,
          panelClass: 'success-snack-bar',
        });
      })
    ).subscribe();
  });

  }

  showSnackBar(message: string, type: 'success' | 'error'): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 4000,
      panelClass: type === 'success' ? 'success-snack-bar' : 'error-snack-bar', 
    });
  }

}
