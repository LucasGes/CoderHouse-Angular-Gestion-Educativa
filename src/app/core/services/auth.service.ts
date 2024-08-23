import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Usuario } from '../../pages/dashboard/usuarios/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private VALID_TOKEN =  '1234567890';

  private _authUser$ = new BehaviorSubject <Usuario | null> (null);

  authUser$ = this._authUser$.asObservable();

  private FAKE_USER: Usuario = {
    email: 'asd@asd.com',
    password: '123456',
    rol: 'USER'
  }

  constructor(private router: Router) { }
  
  login () {
this._authUser$.next(this.FAKE_USER);
localStorage.setItem('token', this.VALID_TOKEN);
this.router.navigate(['dashboard', 'home']);

  }
  
  verificarToken(): Observable <boolean>{
const token = localStorage.getItem('token');
const isValid = this.VALID_TOKEN === token;
if (isValid) {
  this._authUser$.next(this.FAKE_USER);
}
return of(isValid)

  }
  
  verificarUsuario(): Observable <Usuario | null> {
const token = localStorage.getItem(`token`);
if (token) {
  this._authUser$.next(this.FAKE_USER)
}
return this.authUser$;

  }

  logout(){
localStorage.removeItem('token');
this.router.navigate(['auth', 'login'])

  }

}
function Usuario(arg0: null) {
  throw new Error('Function not implemented.');
}

