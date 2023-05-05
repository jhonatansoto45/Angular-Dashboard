import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { KanbanService } from '../../services/projectKanbanService/kanban.service';
import { IKanban } from 'src/app/interfaces';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent implements OnInit {
  board!: IKanban;
  visible = false;
  position = '';
  task = '';

  constructor(private kaban: KanbanService) {}

  showDialog(position: string) {
    this.visible = true;
    this.position = position;
  }

  addTask() {
    if (this.task.length > 3) {
      this.kaban.addNewTask(this.task);
      this.visible = false;
      this.task = '';
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  ngOnInit(): void {
    this.board = this.kaban.kanbanData;
  }
}
