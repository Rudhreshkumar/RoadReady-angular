import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalInfoComponent } from './rental-info.component';

describe('RentalInfoComponent', () => {
  let component: RentalInfoComponent;
  let fixture: ComponentFixture<RentalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
