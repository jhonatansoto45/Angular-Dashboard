import { Component } from '@angular/core';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  constructor(private taskService: TaskService) {}

  get gridData() {
    return this.taskService.tasks;
  }

  get order() {
    return this.taskService.order;
  }

  get social() {
    return this.taskService.social;
  }
}
