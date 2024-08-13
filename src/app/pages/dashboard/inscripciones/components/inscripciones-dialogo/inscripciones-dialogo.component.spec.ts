import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionesDialogoComponent } from './inscripciones-dialogo.component';

describe('InscripcionesDialogoComponent', () => {
  let component: InscripcionesDialogoComponent;
  let fixture: ComponentFixture<InscripcionesDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscripcionesDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionesDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
