import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItem } from 'src/app/interfaces/dashboard.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  activeMenu$: Subject<boolean> = new Subject<boolean>();

  private _menuList: MenuItem[] = [
    {
      name: 'Inicio',
      route: 'dashboard/home',
      icon: '../../../assets/images/icons/home.svg',
    },
    {
      name: 'Tablas',
      route: 'dashboard/details',
      icon: '../../../assets/images/icons/chart-bar.svg',
    },
    {
      name: 'Proyectos',
      route: 'dashboard/projects',
      icon: '../../../assets/images/icons/checklist.svg',
    },
  ];

  private _menuUser: MenuItem[] = [
    {
      name: 'Perfil',
      route: 'auth/login',
      icon: '../../../assets/images/icons/user.svg',
    },
    {
      name: 'Ayuda e Información',
      route: 'auth/help',
      icon: '../../../assets/images/icons/info.svg',
    },
    {
      name: 'Cerrar Sesión',
      route: 'auth/logout',
      icon: '../../../assets/images/icons/logout.svg',
    },
  ];

  get menuList(): MenuItem[] {
    return [...this._menuList];
  }

  get menuUser(): MenuItem[] {
    return [...this._menuUser];
  }
}
