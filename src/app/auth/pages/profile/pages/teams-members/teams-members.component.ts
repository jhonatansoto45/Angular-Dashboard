import { Component } from '@angular/core';
import { ProfileService } from '../../../../services/profile/profile.service';

@Component({
  selector: 'app-teams-members',
  templateUrl: './teams-members.component.html',
  styleUrls: ['./teams-members.component.scss'],
})
export class TeamsMembersComponent {
  constructor(private profileService: ProfileService) {}

  get designList() {
    return this.profileService.getListMembers;
  }
}
