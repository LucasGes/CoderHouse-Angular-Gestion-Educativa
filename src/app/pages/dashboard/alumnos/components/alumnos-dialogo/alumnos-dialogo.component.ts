import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlumnosService } from '../../../../../core/services/alumnos.service';
import { Alumno } from '../../../alumnos/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alumnos-dialogo',
  templateUrl: './alumnos-dialogo.component.html',
  styleUrl: './alumnos-dialogo.component.scss'
})
export class AlumnosDialogoComponent {
  studentForm: FormGroup;
  totalAlumnos: number = 1;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AlumnosDialogoComponent>,
    private alumnosService: AlumnosService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public editarAlumno?: Alumno
  ) {
    this.studentForm = this.fb.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      fechaInscripcion: [],
      cursos: []
    });

    if (this.editarAlumno) {
      this.studentForm.patchValue(this.editarAlumno);
    }

    this.cargarTotalAlumnos(); 
  }

  cargarTotalAlumnos(): void {
    this.alumnosService.getAlumnos().subscribe(alumnos => {
      this.totalAlumnos = alumnos.length;
     
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.cargarTotalAlumnos();
      this.matDialogRef.close(this.studentForm.value),
      this.snackBar.open('Alumno modificado', 'Cerrar', {
        duration: 3000,
        panelClass: 'success-snack-bar',
    })
      
    } else {
      this.snackBar.open('Complete todos los datos', 'Cerrar', {
        duration: 3000,
        panelClass: 'error-snack-bar',
    })
    }
  }
}


