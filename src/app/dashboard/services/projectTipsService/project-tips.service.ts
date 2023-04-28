import { Injectable } from '@angular/core';
import { ITip } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectTipsService {
  projectTips: ITip[] = [
    {
      id: 1,
      tip: 'Conoce y entiende el propósito del proyecto',
      image: '../../../../assets/images/illustrations/knowledge.svg',
    },
    {
      id: 2,
      tip: 'Los roles y las responsabilidades deben estar claramente definidos',
      image: '../../../../assets/images/illustrations/engineering-team.svg',
    },
    {
      id: 3,
      tip: 'Desglosa el trabajo en pasos delimitados por un cronograma',
      image: '../../../../assets/images/illustrations/reminder.svg',
    },
    {
      id: 4,
      tip: 'Celebra reuniones periódicas con tu equipo',
      image: '../../../../assets/images/illustrations/people.svg',
    },
    {
      id: 5,
      tip: 'Planificación del alcance antes de la actividad',
      image: '../../../../assets/images/illustrations/projection.svg',
    },
    {
      id: 6,
      tip: 'Conoce las fortalezas y debilidades de tu equipo',
      image: '../../../../assets/images/illustrations/sharing-knowledge.svg',
    },
  ];

  getTwoRandomTips(): ITip[] {
    const shuffledTips = [...this.projectTips].sort(() => 0.5 - Math.random());
    return shuffledTips.slice(0, 2);
  }
}
