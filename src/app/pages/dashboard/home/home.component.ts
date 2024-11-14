import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';


import { AuthService } from '../../../core/services/auth.service';
import { Usuario } from '../usuarios/models';
import { selectAuthUser } from '../../../core/store/auth/auth.selectors';
import { RootState } from '../../../core/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {
  showFiller = false;

  authUser$: Observable<Usuario | null>;


  constructor(private authService: AuthService, private store: Store<RootState>) {

    this.authUser$ = this.store.select(selectAuthUser);

  }

  logout() {
    this.authService.logout();
  }


}