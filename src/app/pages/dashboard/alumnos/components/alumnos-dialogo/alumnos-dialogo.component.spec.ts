import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosDialogoComponent } from './alumnos-dialogo.component';

describe('AlumnosDialogoComponent', () => {
  let component: AlumnosDialogoComponent;
  let fixture: ComponentFixture<AlumnosDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
