import { TestBed } from '@angular/core/testing';

import { UserHomeServicesService } from './user-home-services.service';

describe('UserHomeServicesService', () => {
  let service: UserHomeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHomeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
