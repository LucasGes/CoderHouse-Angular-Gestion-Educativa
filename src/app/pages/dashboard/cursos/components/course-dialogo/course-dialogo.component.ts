import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-course-dialogo',
  templateUrl: './course-dialogo.component.html',
  styleUrl: './course-dialogo.component.scss'
})
export class CourseDialogoComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder,private matDialogRef: MatDialogRef<CourseDialogoComponent>) {
    this.courseForm = this.fb.group({

      name: [null, Validators.required],
      startDate: [],
      endDate: [],

    })
  }

  onSubmit(): void{
    console.log(this.courseForm.value);

    this.matDialogRef.close(this.courseForm.value);
  }

}
