import { TestBed } from '@angular/core/testing';

import { UserbooklistService } from './userbooklist.service';

describe('UserbooklistService', () => {
  let service: UserbooklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserbooklistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
