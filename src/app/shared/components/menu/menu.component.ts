import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  visibleMenu = false;
  menu: Subscription = new Subscription();

  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    this.menu = this.sharedService.activeMenu$.subscribe((active) => {
      this.visibleMenu = active;
    });
  }

  ngOnDestroy(): void {
    this.menu.unsubscribe();
  }

  get menuList() {
    return this.sharedService.menuList;
  }

  get menuUser() {
    return this.sharedService.menuUser;
  }

  disabledMenu(): void {
    this.visibleMenu = false;
    this.sharedService.activeMenu$.next(false);
  }
}
