import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsMembersComponent } from './teams-members.component';

describe('TeamsMembersComponent', () => {
  let component: TeamsMembersComponent;
  let fixture: ComponentFixture<TeamsMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsMembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
