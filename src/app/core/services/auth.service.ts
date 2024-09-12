import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Usuario } from '../../pages/dashboard/usuarios/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NotifierService } from './notifier.service';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { setAuthUser, unsetAuthUser } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authUser$ = new BehaviorSubject<Usuario | null>(null);

  authUser$ = this._authUser$.asObservable();


  constructor(
    private httpClient: HttpClient, 
    private router: Router, 
    private notifier: NotifierService,
    private store: Store<RootState>
  ) { }


  login(data: { email: string; password: string }) {
    this.httpClient.get<Usuario[]>(environment.apiUrl + '/users', {
      params: {
        email: data.email,
        password: data.password
      },
    }).subscribe({

      next: (response) => {

        if (!response.length) {
          alert('Usuario o contraseña incorrecto')
        } else {

          const authUser = response[0];
          localStorage.setItem('token', authUser.token)
          this.store.dispatch(setAuthUser({payload: authUser})),
          this._authUser$.next(authUser)
          this.router.navigate(['dashboard', 'home'])
        }
      },
      error: (err) => {
        this.notifier.sendNotification('Error al iniciar sesion')
      }
    });
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      return of(false);
    }

    return this.httpClient.get<Usuario[]>(environment.apiUrl + '/users', {
      params: {
        token,
      },
    }).pipe(
      map((response) => {
        if (!response.length) {
          return false;
        } else {
          const authUser = response[0];
          localStorage.setItem('token', authUser.token)
          this._authUser$.next(authUser)
          return true;
        }
      })
    )
  }

  verificarUsuario(): Observable<Usuario | null> {
    const token = localStorage.getItem(`token`);
    if (token) {
      //  this._authUser$.next(this.FAKE_USER)
    }
    return this.authUser$;

  }

  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(unsetAuthUser());
    this._authUser$.next(null);
    this.router.navigate(['auth', 'login'])

  }

}
function Usuario(arg0: null) {
  throw new Error('Function not implemented.');
}

