import { Component } from '@angular/core';

import { AsideList } from '../../../interfaces/index';

@Component({
  selector: 'app-aside-profile',
  templateUrl: './aside-profile.component.html',
  styleUrls: ['./aside-profile.component.scss'],
})
export class AsideProfileComponent {
  menuList: AsideList[] = [
    {
      name: 'Mi Perfil',
      route: '/auth/profile/my-profile',
    },
    {
      name: 'Equipos',
      route: '/auth/profile/teams',
    },
    {
      name: 'Miembros del Equipo',
      route: '/auth/profile/teams-members',
    },
  ];
}
