import { TestBed } from '@angular/core/testing';

import { AdminCouponsService } from './admin-coupons.service';

describe('AdminCouponsService', () => {
  let service: AdminCouponsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCouponsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
