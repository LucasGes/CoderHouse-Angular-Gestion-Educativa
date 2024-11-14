import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDetallesDialogoComponent } from './usuarios-detalles-dialogo.component';

describe('UsuariosDetallesDialogoComponent', () => {
  let component: UsuariosDetallesDialogoComponent;
  let fixture: ComponentFixture<UsuariosDetallesDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosDetallesDialogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosDetallesDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
