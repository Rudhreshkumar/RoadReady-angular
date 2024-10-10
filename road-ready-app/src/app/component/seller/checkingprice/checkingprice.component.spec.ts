import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckingpriceComponent } from './checkingprice.component';

describe('CheckingpriceComponent', () => {
  let component: CheckingpriceComponent;
  let fixture: ComponentFixture<CheckingpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckingpriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckingpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
