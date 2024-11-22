import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthRoutingModule } from '../auth-routing.module';
import { AppRoutingModule } from '../../../app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [CommonModule,
        AuthRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatSnackBarModule
      ],
      providers: [provideAnimationsAsync(),]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El campo email debe ser requerido', () => {
    const emailControl = component.loginForm.get('email');

    emailControl?.setValue('');

    expect(emailControl?.invalid).toBeTrue();


  })

  it('Al llamar onSubmint, si el formulario es invalido, debe mostrar un alert', () => {
    const loginForm = component.loginForm;

    loginForm.setValue({
      email: '',
      contrasena: '',
      rol: ''
    });

    const spyOnAlert = spyOn(window, 'alert');
    component.onSubmit();
    expect(spyOnAlert).toHaveBeenCalled();
  })

  it('Al llamar a onSubmit, si el formulario es valido, debe llamar a authService.login', () => {
    const loginForm = component.loginForm;

    loginForm.setValue({
      email: 'fake@mail.com',
      contrasena: '0123456',
      rol: 'ADMIN'
    });

    const spyOnLogin = spyOn(component.authService, 'login');

    component.onSubmit();

    expect(spyOnLogin).toHaveBeenCalled();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
