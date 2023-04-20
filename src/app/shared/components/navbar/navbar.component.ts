import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  standalone: true,
  imports: [AppRoutingModule],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  currPage = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const route = this.router.url.split('/');
        this.currPage = route[route.length - 1];
      }
    });
  }
}
