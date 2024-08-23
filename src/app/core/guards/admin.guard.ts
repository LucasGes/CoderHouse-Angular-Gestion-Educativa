import { CanActivateFn, Router } from '@angular/router';
import { AuthService} from '../services/auth.service';
import { inject } from '@angular/core';
import { map, skip } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.authUser$.pipe(
 
    map((authUser) =>{
      if (!authUser) {
  return router.createUrlTree(['auth', 'login'])
}

return authUser.rol != 'ADMIN' ? router.createUrlTree(['dashboard', 'usuarios'])
                                : true

    })

);
};
