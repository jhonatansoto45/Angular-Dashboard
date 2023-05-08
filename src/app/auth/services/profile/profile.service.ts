import { Injectable } from '@angular/core';
import { TeamMembersList } from '../../../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _listMembersDesign: TeamMembersList[] = [
    {
      photo:
        'https://images.unsplash.com/photo-1667132970685-a2109a3ed00d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Rose Nadia',
      dateAdded: '08-05-2023',
      lastActive: '08-05-2023',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1667132970685-a2109a3ed00d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Rose Nadia',
      dateAdded: '08-05-2023',
      lastActive: '08-05-2023',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1667132970685-a2109a3ed00d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Rose Nadia',
      dateAdded: '08-05-2023',
      lastActive: '08-05-2023',
    },
    {
      photo:
        'https://images.unsplash.com/photo-1667132970685-a2109a3ed00d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      name: 'Rose Nadia',
      dateAdded: '08-05-2023',
      lastActive: '08-05-2023',
    },
  ];

  get getListMembers(): TeamMembersList[] {
    return this._listMembersDesign;
  }
}
