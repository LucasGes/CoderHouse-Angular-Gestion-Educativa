import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../../models';

@Component({
  selector: 'app-alumnos-dialogo',
  templateUrl: './alumnos-dialogo.component.html',
  styleUrls: ['./alumnos-dialogo.component.scss']
})
export class AlumnosDialogoComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder,private matDialogRef: MatDialogRef<AlumnosDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public editarAlumno? : Alumno
  ) {
    this.courseForm = this.fb.group({

      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      fechaInscripcion: [],
      

    });

if (this.editarAlumno){
    this.courseForm.patchValue(this.editarAlumno); 
}
  }

  onSubmit(): void{
   if (this.courseForm.valid){
    this.matDialogRef.close(this.courseForm.value)
   }else{
    alert('Por favor, complete los campos obligatorios.');

  }
    
  }

}



