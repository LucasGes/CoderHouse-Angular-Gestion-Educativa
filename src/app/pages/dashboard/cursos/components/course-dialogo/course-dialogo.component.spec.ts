import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDialogoComponent } from './course-dialogo.component';

describe('CourseDialogoComponent', () => {
  let component: CourseDialogoComponent;
  let fixture: ComponentFixture<CourseDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
