import { Component } from '@angular/core';
import { TeamsList } from 'src/app/interfaces';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
  listTeams: TeamsList[] = [
    {
      title: 'Diseño Gráfico',
      description:
        'El perfil profesional de un diseñador gráfico combina el arte con la tecnología a fin de comunicar ideas a través de imágenes. Para ello, estos profesionales deben hacer uso de diferentes programas a fin de conseguir los resultados.',
      skills: [
        'Diseñar software',
        'Trabajo en equipo',
        'Comunicación',
        'Creatividad',
        'Capacidad de organización',
      ],
    },
    {
      title: 'Programadores Frontend',
      description:
        'El perfil profesional de un programador Frontend es el desarrollo e implementación de los componentes visuales de una página web. ',
      skills: [
        'Comunicación efectiva',
        'Trabajo en equipo',
        'Resolución de problemas',
        'Aceptar críticas y errores',
        'Buena administración del tiempo',
        'Aprendizaje constante',
      ],
    },
    {
      title: 'Programadores Backend',
      description:
        'El perfil profesional de un diseñador gráfico combina el arte con la tecnología a fin de comunicar ideas a través de imágenes. Para ello, estos profesionales deben hacer uso de diferentes programas a fin de conseguir los resultados',
      skills: [
        'Diseñar software',
        'Trabajo en equipo',
        'Comunicación',
        'Creatividad',
        'Capacidad de organización',
      ],
    },
    {
      title: 'Asesores Comerciales',
      description:
        'El perfil profesional de un diseñador gráfico combina el arte con la tecnología a fin de comunicar ideas a través de imágenes. Para ello, estos profesionales deben hacer uso de diferentes programas a fin de conseguir los resultados',
      skills: [
        'Diseñar software',
        'Trabajo en equipo',
        'Comunicación',
        'Creatividad',
        'Capacidad de organización',
      ],
    },
  ];
}
