import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedcarsummaryComponent } from './usedcarsummary.component';

describe('UsedcarsummaryComponent', () => {
  let component: UsedcarsummaryComponent;
  let fixture: ComponentFixture<UsedcarsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedcarsummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedcarsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
