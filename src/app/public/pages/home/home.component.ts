import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  test: string[] = ['Here landing page'];

  constructor() {
    for (let i = 0; i < 200; i++) {
      this.test.push('Here landing page');
    }
  }
}
