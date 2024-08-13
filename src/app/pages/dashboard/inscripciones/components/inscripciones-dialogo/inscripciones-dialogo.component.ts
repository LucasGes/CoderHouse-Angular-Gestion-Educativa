import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inscripcion } from '../../models';

@Component({
  selector: 'app-inscripciones-dialogo',
  templateUrl: './inscripciones-dialogo.component.html',
  styleUrl: './inscripciones-dialogo.component.scss'
})
export class InscripcionesDialogoComponent {
  inscripcionForm: FormGroup;

  constructor (private fb:FormBuilder, private MatDialogRef: MatDialogRef<InscripcionesDialogoComponent>,
    @Inject (MAT_DIALOG_DATA) public inscribirAlumno? : Inscripcion )
    { this.inscripcionForm = this.fb.group({

      alumno: [null, Validators.required],
      curso: [null, Validators.required],
      fechaInscripcion: [],
    });
    if (this.inscribirAlumno){
      this.inscripcionForm.patchValue(this.inscribirAlumno); 
  }
    }
  
    onSubmit(): void{
     if (this.inscripcionForm.valid){
      this.MatDialogRef.close(this.inscripcionForm.value)
     }else{
      alert('Por favor, complete los campos obligatorios.');
  
    }

    }
  

}
