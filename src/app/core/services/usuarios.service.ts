import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../pages/dashboard/usuarios/models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  constructor(private httpClient: HttpClient) { }


    getUsuarios(): Observable<Usuario[]> {
      return this.httpClient.get<Usuario[]>(environment.apiUrl + '/users');
    }
  
    addUsuario(usuario: Usuario): Observable<Usuario[]> {
      return this.httpClient.post<Usuario[]>(environment.apiUrl + '/users', usuario);
    }
  
    deleteUsuario(id: string) {
      return this.httpClient.delete(environment.apiUrl + '/users/' + id);
    }
  
    editUsuario(id: string, usuario: Usuario) {
      return this.httpClient.put(environment.apiUrl + '/users/' + id, usuario);
      ;
    }
  
  }
  


  

