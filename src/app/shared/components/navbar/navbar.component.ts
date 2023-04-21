import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, NavigationEnd, Router, RouterModule } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  currPage = '';
  isActiveMenu = false;
  menu: Subscription = new Subscription();

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const route = this.router.url.split('/');
        this.currPage = route[route.length - 1];
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
}
