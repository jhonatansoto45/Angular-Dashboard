import { Component } from '@angular/core';
import { TasksDataTable } from 'src/app/interfaces';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks: TasksDataTable[] = [
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
}
