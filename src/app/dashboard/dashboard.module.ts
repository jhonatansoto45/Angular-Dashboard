import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ComponentsModule } from './components/components.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrimengModule } from '../shared/primeng/primeng.module';

import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { ProjectTipsComponent } from './pages/projects/components/project-tips/project-tips.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    ProjectsComponent,
    ProjectInfoComponent,
    ProjectTipsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DashboardRoutingModule,
    DragDropModule,
    FormsModule,
    PrimengModule,
  ],
})
export class DashboardModule {}
