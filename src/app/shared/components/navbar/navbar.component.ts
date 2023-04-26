import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import { log } from 'console';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  currPage = '';
  currChildrenPage = '';
  isLoadingChildrenRoute = false;
  isActiveMenu = false;
  menu: Subscription = new Subscription();

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd || this.router.url) {
        const route = this.router.url.split('/');
        if (route.length > 3) {
          this.getChildrenUrlName(route);
        } else {
          this.currPage = route[route.length - 1];
          this.currChildrenPage = '';
        }
      }
    });

    this.menu = this.sharedService.activeMenu$.subscribe((active) => {
      this.isActiveMenu = active;
    });
  }

  ngOnDestroy(): void {
    this.menu.unsubscribe();
  }

  activeMenu(): void {
    this.isActiveMenu = true;
    this.sharedService.activeMenu$.next(true);
  }

  getChildrenUrlName(route: string[]): void {
    this.currPage = route[route.length - 2];

    //get the projects/:children route name
    let childrenPageName = '';
    route[route.length - 1]
      .split('%20')
      .forEach((item) => (childrenPageName += ' ' + item));
    this.currChildrenPage = childrenPageName;
  }
}
