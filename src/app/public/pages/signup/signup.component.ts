import { Component } from '@angular/core';
import { TForm } from 'src/app/interfaces';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupForm: TForm[] = [
    {
      name: 'email',
      type: 'email',
      icon: '../../../../assets/images/icons/email.svg',
      placeholder: 'Correo electronico',
    },
    {
      name: 'password',
      type: 'password',
      icon: '../../../../assets/images/icons/password.svg',
      placeholder: 'Ingresa una contraseña',
    },
    {
      name: 'confirm_password',
      type: 'password',
      icon: '../../../../assets/images/icons/password.svg',
      placeholder: 'Confirmacion de contraseña',
    },
  ];
}
