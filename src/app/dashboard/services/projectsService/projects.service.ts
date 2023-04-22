import { Injectable } from '@angular/core';
import { IProjectInfo } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: IProjectInfo[] = [
    {
      id: 0,
      name: 'Dashboard app',
      members: 1,
      creationDate: '22/08/2022',
      description: 'Proyecto para la creación de un dashboard interactivo',
    },
    {
      id: 1,
      name: 'Social media app',
      members: 3,
      creationDate: '03/01/2023',
      description:
        'Proyecto para la creación de una red social con mayor seguridad y respeto hacia la información del usuario',
    },
    {
      id: 2,
      name: 'Manejo de recursos ambientalesssssssss',
      members: 2,
      creationDate: '01/12/2023',
      description:
        'Proyecto para el manejo de recursos y desechos ambientales con su adecuada manipulación y reutilización',
    },
  ];

  getProjects(): IProjectInfo[] {
    return this.projects;
  }

  setProjects(data: IProjectInfo): void {
    this.projects.push(data);
  }

  getProjectInfoById(id: number): IProjectInfo[] {
    return this.projects.filter((item) => item.id !== id);
  }
}
