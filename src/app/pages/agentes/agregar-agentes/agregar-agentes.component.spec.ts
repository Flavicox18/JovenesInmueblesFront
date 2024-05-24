import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAgentesComponent } from './agregar-agentes.component';

describe('AgregarAgentesComponent', () => {
  let component: AgregarAgentesComponent;
  let fixture: ComponentFixture<AgregarAgentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarAgentesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AgregarAgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate form if password less than 6 characters', () => {
    const passwordControl = component.formulario.get('contrasena');
    passwordControl!.setValue('12345');
    expect(component.formulario.invalid).toBeTruthy();
  });

  it('should invalidate form if password more than 12 characters', () => {
    const passwordControl = component.formulario.get('contrasena');
    passwordControl!.setValue('1234567890123');
    expect(component.formulario.invalid).toBeTruthy();
  });


  it('should invalidate form if dni more than 8 digits', () => {
    const dniControl = component.formulario.get('dni');
    dniControl!.setValue('123456789');
    expect(component.formulario.invalid).toBeTruthy();
  });

  it('should invalidate form if contact number more than 9 digits', () => {
    const contactControl = component.formulario.get('contacto');
    contactControl!.setValue('1234567890');
    expect(component.formulario.invalid).toBeTruthy();
  });

  it('should validate form if all fields are valid', () => {
    component.formulario.setValue({
      nombres: 'John',
      apellidos: 'Doe',
      dni: '12345678',
      correo: 'john@example.com',
      contrasena: '123456',
      contacto: '123456789',
      foto: ''
    });
    expect(component.formulario.valid).toBeTruthy();
  });
});
