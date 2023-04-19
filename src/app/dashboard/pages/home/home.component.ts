import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public dashboardService: DashboardService) {}

  get dateHour(): string {
    return this.dashboardService.getHoursDate();
  }
}
