import { Injectable } from '@angular/core';
import { IKanban } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {
  _board: IKanban = {
    columns: [
      {
        name: 'Tareas',
        tasks: [
          'Lavar la loza',
          'programing',
          'Hacer los traster',
          'Check e-mail',
        ],
      },
      {
        name: 'En Progreso',
        tasks: [
          'Get to work',
          'Pick up groceries',
          'Go home i juega csgo pa',
          'Fall asleep en la camita',
          'Check e-mail',
        ],
      },
      {
        name: 'Finalizada',
        tasks: [
          'Get up',
          'lava tus diente todos los dias',
          'Toma una ducha mi so',
          'Saca esa perra a pasear',
        ],
      },
    ],
  };

  addNewTask(task: string) {
    this._board.columns[0].tasks.push(task);
  }

  get kanbanData(): IKanban {
    return this._board;
  }
}
