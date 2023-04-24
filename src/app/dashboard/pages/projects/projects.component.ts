import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projectsService/projects.service';
import { IProjectInfo } from 'src/app/interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectsList: IProjectInfo[] = [];

  constructor(private projects: ProjectsService) {}

  ngOnInit(): void {
    this.projectsList = this.projects.getProjects();
  }
}
