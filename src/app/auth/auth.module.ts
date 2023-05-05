import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HelpComponent } from './pages/help/help.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AsideProfileComponent } from './components/aside-profile/aside-profile.component';
import { MyProfileComponent } from './pages/profile/pages/my-profile/my-profile.component';
import { TeamsComponent } from './pages/profile/pages/teams/teams.component';
import { TeamsMembersComponent } from './pages/profile/pages/teams-members/teams-members.component';


@NgModule({
  declarations: [
    LoginComponent,
    HelpComponent,
    LogoutComponent,
    ProfileComponent,
    AsideProfileComponent,
    MyProfileComponent,
    TeamsComponent,
    TeamsMembersComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
