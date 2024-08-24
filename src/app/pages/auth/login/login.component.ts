import { Component, Inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

constructor (public authService: AuthService, private fb:FormBuilder ) {

  this.loginForm = this.fb.group ({
     email: ['', [Validators.required, Validators.email]],
     contrasena: ['', [Validators.required]],
     rol: ['ADMIN', [Validators.required]]
  });
}

onSubmit() {
  if (this.loginForm.invalid){
    alert('Usuario o contraseña incorrecto')
  } else {
this.authService.login();
  }
}

}
