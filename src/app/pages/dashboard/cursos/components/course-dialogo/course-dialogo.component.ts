import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from '../../models/index';
import { Observable } from 'rxjs';
import { Usuario } from '../../../usuarios/models';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-course-dialogo',
  templateUrl: './course-dialogo.component.html',
  styleUrl: './course-dialogo.component.scss'
})

export class CourseDialogoComponent {
  courseForm: FormGroup;


  constructor(
    private fb: FormBuilder, 
    
    private matDialogRef: MatDialogRef<CourseDialogoComponent>,

    private snackBar: MatSnackBar,

    @Inject(MAT_DIALOG_DATA) public editarCurso?: Curso) {

    this.courseForm = this.fb.group({


      nombre: [null, Validators.required],
      docente: [null, Validators.required],
      horas: [null, Validators.required],
      fechaInicio: [null, Validators.required],
      fechaFin: [null, Validators.required]

    })

    if (this.editarCurso) {
      this.courseForm.patchValue(this.editarCurso);
    }
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      this.matDialogRef.close(this.courseForm.value),
      this.snackBar.open('Curso creado correctamente', 'Cerrar', {
        duration: 3000,
        panelClass: 'success-snack-bar'})
    } else {
      this.snackBar.open('Complete todos los datos', 'Cerrar', {
        duration: 3000,
        panelClass: 'error-snack-bar',
      })
    }
  }

}



