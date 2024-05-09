import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAgentesComponent } from './editar-agentes.component';

describe('EditarAgentesComponent', () => {
  let component: EditarAgentesComponent;
  let fixture: ComponentFixture<EditarAgentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarAgentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarAgentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
