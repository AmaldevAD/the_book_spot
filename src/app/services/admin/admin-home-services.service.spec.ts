import { TestBed } from '@angular/core/testing';

import { AdminHomeServicesService } from './admin-home-services.service';

describe('AdminHomeServicesService', () => {
  let service: AdminHomeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminHomeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
