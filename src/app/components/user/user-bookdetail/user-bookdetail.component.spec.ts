import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookdetailComponent } from './user-bookdetail.component';

describe('UserBookdetailComponent', () => {
  let component: UserBookdetailComponent;
  let fixture: ComponentFixture<UserBookdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBookdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
