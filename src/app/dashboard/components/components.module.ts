import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { SharedModule } from '../../shared/shared.module';
import { PrimengModule } from '../../shared/primeng/primeng.module';

import { CardItemComponent } from './card-item/card-item.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ScrollItemsComponent } from './scroll-items/scroll-items.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    CardItemComponent,
    CardProjectComponent,
    GraphicsComponent,
    ScrollItemsComponent,
    StatisticsComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    PrimengModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    CardItemComponent,
    CardProjectComponent,
    GraphicsComponent,
    ScrollItemsComponent,
    StatisticsComponent,
    TasksComponent,
  ],
})
export class ComponentsModule {}
