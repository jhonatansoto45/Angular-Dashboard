import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currPage = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const route = this.router.url.split('/');
        this.currPage = route[route.length - 1];
      }
    });
  }
}
