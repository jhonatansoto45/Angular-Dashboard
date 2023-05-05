import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpComponent } from './pages/help/help.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyProfileComponent } from './pages/profile/pages/my-profile/my-profile.component';
import { TeamsComponent } from './pages/profile/pages/teams/teams.component';
import { TeamsMembersComponent } from './pages/profile/pages/teams-members/teams-members.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: 'my-profile',
            component: MyProfileComponent,
          },
          {
            path: 'teams',
            component: TeamsComponent,
          },
          {
            path: 'teams-members',
            component: TeamsMembersComponent,
          },
          {
            path: '**',
            redirectTo: 'my-profile',
          },
        ],
      },
      {
        path: 'help',
        component: HelpComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
