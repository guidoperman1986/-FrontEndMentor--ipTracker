import { TestBed } from '@angular/core/testing';

import { IptrackerService } from './iptracker.service';

describe('IptrackerService', () => {
  let service: IptrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IptrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
