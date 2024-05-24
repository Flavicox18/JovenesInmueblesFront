import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-agregar-agentes',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './agregar-agentes.component.html',
  styleUrl: './agregar-agentes.component.css'
})
export class AgregarAgentesComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombres: ['', [Validators.required, Validators.maxLength(30)]],
      apellidos: ['', [Validators.required, Validators.maxLength(30)]],
      dni: ['', [Validators.required, Validators.maxLength(8), Validators.pattern('^[0-9]{8}$')]],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      contacto: ['', [Validators.required, Validators.maxLength(9), Validators.pattern('^[0-9]{9}$')]],
      foto: ['']
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      // Aquí puedes enviar los datos al servidor
      console.log(this.formulario.value);
    } else {
      // Si el formulario no es válido, puedes mostrar un mensaje o realizar otra acción
      alert('Por favor, complete el formulario correctamente.');
    }
  }

  onKeyPress(event: any) {
    // Obtener el código de la tecla presionada
    const charCode = (event.which) ? event.which : event.keyCode;
    // Permitir solo números (del 0 al 9) y teclas de control como borrar y retroceso
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault(); // Cancelar el evento si no es un número
    }
  }

}
