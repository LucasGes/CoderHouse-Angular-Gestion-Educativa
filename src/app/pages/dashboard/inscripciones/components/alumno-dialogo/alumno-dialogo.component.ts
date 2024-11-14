import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlumnosService } from '../../../../../core/services/alumnos.service';
import { Alumno } from '../../../alumnos/models';

@Component({
  selector: 'app-alumno-dialogo',
  templateUrl: './alumno-dialogo.component.html',
  styleUrl: './alumno-dialogo.component.scss'
})
export class AlumnoDialogoComponent {

  studentForm: FormGroup;
  totalAlumnos: number = 1;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AlumnoDialogoComponent>,
    private alumnosService: AlumnosService,
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
      this.matDialogRef.close(this.studentForm.value)
      alert('Alumno dado de alta.');
    } else {
      alert('Por favor, complete los campos obligatorios.');
    }
  }
}

