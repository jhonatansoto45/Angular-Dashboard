import { NgModule } from '@angular/core';

import { ChartModule } from 'primeng/chart';
import { DragScrollModule } from 'ngx-drag-scroll';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  exports: [
    ChartModule,
    DragScrollModule,
    TableModule,
    RatingModule,
    TagModule,
    DialogModule,
  ],
})
export class PrimengModule {}
