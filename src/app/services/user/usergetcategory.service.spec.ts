import { TestBed } from '@angular/core/testing';

import { UsergetcategoryService } from './usergetcategory.service';

describe('UsergetcategoryService', () => {
  let service: UsergetcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsergetcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
