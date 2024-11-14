import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosDetallesDialogoComponent } from './alumnos-detalles-dialogo.component';

describe('AlumnosDetallesDialogoComponent', () => {
  let component: AlumnosDetallesDialogoComponent;
  let fixture: ComponentFixture<AlumnosDetallesDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosDetallesDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosDetallesDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
