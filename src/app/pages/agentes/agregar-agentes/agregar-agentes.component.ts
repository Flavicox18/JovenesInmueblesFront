import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-agregar-agentes',
  templateUrl: './agregar-agentes.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['./agregar-agentes.component.css']
})
export class AgregarAgentesComponent {
  agentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.agentForm = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.maxLength(30)]],
      apellidos: ['', [Validators.required, Validators.maxLength(30)]],
      dni: ['', [Validators.required, Validators.maxLength(8), Validators.pattern("^[0-9]*$")]],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      contacto: ['', [Validators.required, Validators.maxLength(9), Validators.pattern("^[0-9]*$")]],
      foto: ['']
    });
  }

  onSubmit() {
    if (this.agentForm.valid) {
      // Envía el formulario
      console.log(this.agentForm.value);
    } else {
      // Marca los campos inválidos
      this.markFormGroupTouched(this.agentForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
