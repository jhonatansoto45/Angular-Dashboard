import { Component } from '@angular/core';
import { DragScrollItem } from 'src/app/interfaces/dashboard.interface';

@Component({
  selector: 'app-scroll-items',
  templateUrl: './scroll-items.component.html',
  styleUrls: ['./scroll-items.component.scss'],
})
export class ScrollItemsComponent {
  dragItem: DragScrollItem[] = [
    {
      image: '../../../../assets/images/illustrations/avatar.svg',
      text: 'Tareas realizadas',
      value: '4/5 tareas',
    },
    {
      image: '../../../../assets/images/illustrations/calendar.svg',
      text: 'Fecha',
      value: `${new Date().toLocaleDateString('es-CO')}`,
    },
    {
      image: '../../../../assets/images/illustrations/progress.svg',
      text: 'Progreso',
      value: '50%',
    },
    {
      image: '../../../../assets/images/illustrations/project.svg',
      text: 'Proyectos hoy',
      value: 'Sin resultados',
    },
  ];
}
