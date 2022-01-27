import { TestBed } from '@angular/core/testing';

import { GetPeriodicService } from './get-periodic.service';

describe('GetPeriodicService', () => {
  let service: GetPeriodicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPeriodicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
