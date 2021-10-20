import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgrorybasedbooklistComponent } from './catgrorybasedbooklist.component';

describe('CatgrorybasedbooklistComponent', () => {
  let component: CatgrorybasedbooklistComponent;
  let fixture: ComponentFixture<CatgrorybasedbooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatgrorybasedbooklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatgrorybasedbooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
