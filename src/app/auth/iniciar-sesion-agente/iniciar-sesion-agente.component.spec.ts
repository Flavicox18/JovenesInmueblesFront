import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionAgenteComponent } from './iniciar-sesion-agente.component';

describe('IniciarSesionAgenteComponent', () => {
  let component: IniciarSesionAgenteComponent;
  let fixture: ComponentFixture<IniciarSesionAgenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciarSesionAgenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IniciarSesionAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
