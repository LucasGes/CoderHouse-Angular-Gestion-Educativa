import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';


describe('AuthService', () => {
  let service: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({ });
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });



  it('Al llamar login debe redireccionar al dashboar.', () => {

    const spyOnNavigate = spyOn(router, 'navigate');

    service.login()

    expect(spyOnNavigate).toHaveBeenCalled();

  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


