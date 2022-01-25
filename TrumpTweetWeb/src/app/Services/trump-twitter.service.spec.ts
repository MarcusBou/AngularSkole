import { TestBed } from '@angular/core/testing';

import { TrumpTwitterService } from './trump-twitter.service';

describe('TrumpTwitterService', () => {
  let service: TrumpTwitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrumpTwitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
