import { Component, Inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

constructor (
  public authService: AuthService, 
  private fb:FormBuilder,
  private snackBar: MatSnackBar ) {

  this.loginForm = this.fb.group ({
     email: ['', [Validators.required, Validators.email]],
     contrasena: ['', [Validators.required]],
  });
}

onSubmit() {
  if (this.loginForm.invalid){
    this.showSnackBar('Usuario o contraseña incorrecto', 'error');

  } else {
    const data= { 
      email:this.loginForm.get('email')?.value, 
      password: this.loginForm.get('contrasena')?.value
    }
this.authService.login(data);
  }
}

showSnackBar(message: string, type: 'success' | 'error'): void {
  this.snackBar.open(message, 'Cerrar', {
    duration: 4000,
    panelClass: type === 'success' ? 'success-snack-bar' : 'error-snack-bar', 
  });
}


}
