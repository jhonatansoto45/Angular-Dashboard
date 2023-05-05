import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  test: string[] = ['Here landing page'];

  constructor() {
    for (let i = 0; i < 200; i++) {
      this.test.push('Here landing page');
    }
  }
}
