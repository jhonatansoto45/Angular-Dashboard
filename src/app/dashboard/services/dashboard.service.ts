import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  getHoursDate(): string {
    const hour = new Date().getHours();
    return hour >= 1 && hour < 12
      ? 'Buenos días'
      : hour >= 12 && hour < 18
      ? 'Buenas tardes'
      : hour >= 18
      ? 'Buenas noches'
      : '';
  }
}
