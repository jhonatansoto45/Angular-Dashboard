import { Injectable } from '@angular/core';
import {
  DragScrollItem,
  TaskOrderType,
  TasksDataTable,
} from '../../../../interfaces/dashboard.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks: TasksDataTable[] = [
    {
      company: 'Versión de interfaz de usuario suave de Chakra',
      members: 4,
      budget: 140000,
      termination: 60,
    },
    {
      company: 'Versión de interfaz de usuario suave de Chakra',
      members: 2,
      budget: 520000,
      termination: 40,
    },
    {
      company: 'Versión de interfaz de usuario suave de Chakra',
      members: 4,
      budget: 140000,
      termination: 60,
    },
    {
      company: 'Versión de interfaz de usuario suave de Chakra',
      members: 4,
      budget: 140000,
      termination: 60,
    },
    {
      company: 'Versión de interfaz de usuario suave de Chakra',
      members: 4,
      budget: 140000,
      termination: 60,
    },
    {
      company: 'Versión de interfaz de usuario suave de Chakra',
      members: 4,
      budget: 140000,
      termination: 60,
    },
  ];

  private _orderTasks: TaskOrderType[] = [
    {
      message: '1983, orden, $4220',
      date: '07 Sep 2022 11:28 PM',
      color: this.generateNewColor(),
    },
    {
      message: '1983, orden, $4220',
      date: new Date(),
      color: this.generateNewColor(),
    },
    {
      message: '1983, orden, $4220',
      date: new Date(),
      color: this.generateNewColor(),
    },
    {
      message: '1983, orden, $4220',
      date: new Date(),
      color: this.generateNewColor(),
    },
    {
      message: '1983, orden, $4220',
      date: new Date(),
      color: this.generateNewColor(),
    },
  ];

  private _socialNetwork: DragScrollItem[] = [
    {
      image: 'facebook',
      text: 'Facebook',
      value: '5.000K',
    },
    {
      image: 'instagram-icon',
      text: 'Instagram',
      value: '10.000M',
    },
    {
      image: 'twitter',
      text: 'Twitter',
      value: '2.000K',
    },
    {
      image: 'youtube-icon',
      text: 'Youtube',
      value: '25.000K',
    },
  ];

  get tasks(): TasksDataTable[] {
    return this._tasks;
  }

  get order(): TaskOrderType[] {
    return this._orderTasks;
  }

  get social(): DragScrollItem[] {
    return this._socialNetwork;
  }

  generateNewColor(): string {
    const totalHexaCharacters = 6;
    const symbols = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < totalHexaCharacters; i++) {
      color = color + symbols[Math.floor(Math.random() * 16)];
    }

    return color;
  }
}
