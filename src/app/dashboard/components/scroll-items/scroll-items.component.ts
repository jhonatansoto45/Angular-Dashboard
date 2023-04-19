import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-items',
  templateUrl: './scroll-items.component.html',
  styleUrls: ['./scroll-items.component.scss'],
})
export class ScrollItemsComponent {
  onWheel(event: WheelEvent): void {
    if (event.deltaY > 0) this.scrollToRight();
    else this.scrollToLeft();
  }

  scrollToLeft(): void {
    // document.getElementById('scroll-1').scrollLeft -= 400;
  }

  scrollToRight(): void {
    // document.getElementById('scroll-1')!.scrollLeft += 400;
  }
}
