import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(public sharedService: SharedService) {}

  get menuList() {
    return this.sharedService.menuList;
  }

  get menuUser() {
    return this.sharedService.menuUser;
  }
}
