import { TestBed } from '@angular/core/testing';

import { HandleDicService } from './handle-dic.service';

describe('HandleDicService', () => {
  let service: HandleDicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleDicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
