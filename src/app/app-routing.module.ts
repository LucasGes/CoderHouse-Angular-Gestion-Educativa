import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
 
  {path: 'auth', 
    loadChildren: () => import('./pages/auth/auth.module').then((r) => r.AuthModule)
  },
  
  {path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    loadChildren: () => import ('./pages/dashboard/dashboard.module').then((r) => r.DashboardModule) 
  },
  {path:'**',
    redirectTo: "/auth"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
