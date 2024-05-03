import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy,Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export default class LoginComponent {

}
