import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { Usuario } from './usuarios/models';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';
import { selectAuthUser } from '../../core/store/auth/auth.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})


export class DashboardComponent {
  showFiller = false;

  authUser$: Observable<Usuario | null>;


  constructor(private authService: AuthService, private store: Store<RootState>) {

    this.authUser$ = this.store.select(selectAuthUser);

  }

  logout() {
    this.authService.logout();
  }


}

