import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

@Component({
  standalone: true,
  imports: [AppRoutingModule, NgxHideOnScrollModule],
  selector: 'app-lading-page-navbar',
  templateUrl: './lading-page-navbar.component.html',
  styleUrls: ['./lading-page-navbar.component.scss'],
})
export class LadingPageNavbarComponent {}
