import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private VALID_TOKEN =  '1234567890';

  constructor(private router: Router) { }
  
  login () {

localStorage.setItem('token', this.VALID_TOKEN);
this.router.navigate(['dashboard', 'home']);

  }
  
  verificarToken(): Observable <boolean>{
const token = localStorage.getItem('token');

return of(this.VALID_TOKEN === token)

  }
  
  obtenerUsuarioAutenticado(){}

  logout(){
localStorage.removeItem('token');
this.router.navigate(['auth', 'login'])

  }

}
