import { Component, OnInit } from '@angular/core';
import { ProjectTipsService } from 'src/app/dashboard/services/projectTipsService/project-tips.service';
import { ITip } from 'src/app/interfaces';

@Component({
  selector: 'app-project-tips',
  templateUrl: './project-tips.component.html',
  styleUrls: ['./project-tips.component.scss'],
})
export class ProjectTipsComponent implements OnInit {
  tips: ITip[] = [];

  constructor(private projectService: ProjectTipsService) {}

  ngOnInit(): void {
    this.tips = this.projectService.getTwoRandomTips();
  }
}
