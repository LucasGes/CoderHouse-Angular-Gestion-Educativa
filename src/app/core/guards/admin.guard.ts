import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { map} from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../store/auth/auth.selectors';

export const adminGuard: CanActivateFn = (route, state) => {

    const router = inject(Router);
  const store = inject(Store);

  return store.select(selectAuthUser).pipe(
 
    map((authUser) =>{
      if (!authUser) {
  return router.createUrlTree(['auth', 'login'])
}

return authUser.rol != 'ADMIN' ? router.createUrlTree(['dashboard', 'usuarios'])
                                : true

    })

);
};
