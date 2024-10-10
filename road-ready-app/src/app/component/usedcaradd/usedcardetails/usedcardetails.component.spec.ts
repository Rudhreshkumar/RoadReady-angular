import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedcardetailsComponent } from './usedcardetails.component';

describe('UsedcardetailsComponent', () => {
  let component: UsedcardetailsComponent;
  let fixture: ComponentFixture<UsedcardetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedcardetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedcardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
