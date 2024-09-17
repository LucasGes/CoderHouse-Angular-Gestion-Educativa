import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from '../../models/index';
@Component({
  selector: 'app-course-dialogo',
  templateUrl: './course-dialogo.component.html',
  styleUrl: './course-dialogo.component.scss'
})

export class CourseDialogoComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder,private matDialogRef: MatDialogRef<CourseDialogoComponent>,
    
    @Inject(MAT_DIALOG_DATA) public editarCurso? : Curso) {


    this.courseForm = this.fb.group({


      nombre: [null, Validators.required],
      docente: [null, Validators.required],
      alumnos: [null, Validators.required],
      fechaInicio: [null, Validators.required],
      fechaFin: [null, Validators.required]
  
    })
  
  if (this.editarCurso){
    this.courseForm.patchValue(this.editarCurso); 
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

