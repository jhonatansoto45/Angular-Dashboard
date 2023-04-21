import { Component } from '@angular/core';
import { TForm } from 'src/app/interfaces';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  signinForm: TForm[] = [
    {
      name: 'email',
      type: 'email',
      icon: './../../../assets/images/icons/email.svg',
      placeholder: 'Correo electronico',
    },
    {
      name: 'password',
      type: 'password',
      icon: './../../../assets/images/icons/password.svg',
      placeholder: 'Contraseña',
    },
  ];
}
