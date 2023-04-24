import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ChartModule } from 'primeng/chart';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ScrollItemsComponent } from './components/scroll-items/scroll-items.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { ImagePipe } from './pipe/image.pipe';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { CardProjectComponent } from './components/card-project/card-project.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    ProjectsComponent,
    ProjectInfoComponent,
    ScrollItemsComponent,
    CardItemComponent,
    ImagePipe,
    GraphicsComponent,
    StatisticsComponent,
    TasksComponent,
    CardProjectComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DragScrollModule,
    ChartModule,

  ],
})
export class DashboardModule {}
