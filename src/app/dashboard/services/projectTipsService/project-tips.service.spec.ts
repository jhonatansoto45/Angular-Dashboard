import { TestBed } from '@angular/core/testing';

import { ProjectTipsService } from './project-tips.service';

describe('ProjectTipsService', () => {
  let service: ProjectTipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectTipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
