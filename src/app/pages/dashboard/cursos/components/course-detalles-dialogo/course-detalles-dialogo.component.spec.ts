import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetallesDialogoComponent } from './course-detalles-dialogo.component';

describe('CourseDetallesDialogoComponent', () => {
  let component: CourseDetallesDialogoComponent;
  let fixture: ComponentFixture<CourseDetallesDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetallesDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetallesDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
