import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRentalCarComponent } from './single-rental-car.component';

describe('SingleRentalCarComponent', () => {
  let component: SingleRentalCarComponent;
  let fixture: ComponentFixture<SingleRentalCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRentalCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRentalCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
