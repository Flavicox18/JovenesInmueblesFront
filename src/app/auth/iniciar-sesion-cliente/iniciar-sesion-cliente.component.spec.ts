import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionClienteComponent } from './iniciar-sesion-cliente.component';

describe('IniciarSesionClienteComponent', () => {
  let component: IniciarSesionClienteComponent;
  let fixture: ComponentFixture<IniciarSesionClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciarSesionClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IniciarSesionClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
