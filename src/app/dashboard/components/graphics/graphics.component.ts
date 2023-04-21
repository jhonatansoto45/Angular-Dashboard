import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { TypeChart } from 'src/app/interfaces/dashboard.interface';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent implements OnChanges {
  @Input() graphType!: TypeChart;
  @Input() data!: ChartConfiguration['data'];
  options: ChartConfiguration['options'] = {
    color: 'white',
    scales: {
      y: {
        ticks: {
          color: 'white',
        },
      },
      /*  y1: {
        position: 'left',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'white',
        },
      }, */
      x: {
        ticks: {
          color: 'white',
        },
      },
    },
    responsive: true,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if ('data' in changes) {
      console.log(this.data);
    }
  }

  get type() {
    return TypeChart;
  }
}
