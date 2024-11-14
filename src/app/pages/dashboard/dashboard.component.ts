import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { Usuario } from './usuarios/models';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store';
import { selectAuthUser } from '../../core/store/auth/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})


export class DashboardComponent {

  isHome: boolean = true;
  showFiller = false;

  authUser$: Observable<Usuario | null>;


  constructor(private authService: AuthService, private store: Store<RootState>, private router: Router) {

    this.authUser$ = this.store.select(selectAuthUser);

  }

  ngOnInit(): void {
    
    this.isHome = !(this.router.url  === '/dashboard/home');
  }


  logout() {
    this.authService.logout();
  }


}

