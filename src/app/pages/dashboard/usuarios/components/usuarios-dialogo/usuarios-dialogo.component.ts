import { Component, Inject, signal } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../models';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-usuarios-dialogo',
  templateUrl: './usuarios-dialogo.component.html',
  styleUrl: './usuarios-dialogo.component.scss'
})
export class UsuariosDialogoComponent {  
  userForm: FormGroup;
  selectedFileName: string | null = null;
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  

  constructor(
   
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<UsuariosDialogoComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) 
    public editarUsuario? : Usuario, 
  ) {

    this.userForm = this.fb.group({

      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      email: [null, Validators.email],
      contrasena: [
        '', 
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[A-Z])(?=(?:.*\d){3})/)
        ]
      ],
      rol: [null, Validators.required],
      fotoPerfil: ['']

    });

if (this.editarUsuario){
    this.userForm.patchValue(this.editarUsuario); 
}
}
  
  onSubmit(): void{
   if (this.userForm.valid){
    this.matDialogRef.close(this.userForm.value)
   }else{
    this.snackBar.open('Complete todos los datos', 'Cerrar', {
      duration: 3000,
      panelClass: 'error-snack-bar',
  })
     
  }
}
}

