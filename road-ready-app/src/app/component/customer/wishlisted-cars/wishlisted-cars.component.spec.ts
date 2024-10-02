import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistedCarsComponent } from './wishlisted-cars.component';

describe('WishlistedCarsComponent', () => {
  let component: WishlistedCarsComponent;
  let fixture: ComponentFixture<WishlistedCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishlistedCarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
