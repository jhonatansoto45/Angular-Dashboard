import { NgModule } from '@angular/core';

import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { DragScrollModule } from 'ngx-drag-scroll';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@NgModule({
  exports: [
    ChartModule,
    DialogModule,
    DragScrollModule,
    PanelModule,
    RatingModule,
    TableModule,
    TagModule,
  ],
})
export class PrimengModule {}
