import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalcarsComponent } from './rentalcars.component';

describe('RentalcarsComponent', () => {
  let component: RentalcarsComponent;
  let fixture: ComponentFixture<RentalcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalcarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
