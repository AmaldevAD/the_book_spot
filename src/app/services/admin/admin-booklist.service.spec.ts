import { TestBed } from '@angular/core/testing';

import { AdminBooklistService } from './admin-booklist.service';

describe('AdminBooklistService', () => {
  let service: AdminBooklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBooklistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
