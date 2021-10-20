import { TestBed } from '@angular/core/testing';

import { AdminGetcategoriesService } from './admin-getcategories.service';

describe('AdminGetcategoriesService', () => {
  let service: AdminGetcategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGetcategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
