import { Component, Input } from '@angular/core';
import { IProjectInfo } from 'src/app/interfaces';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss'],
})
export class CardProjectComponent {
  @Input() projectInfo!: IProjectInfo;
}
