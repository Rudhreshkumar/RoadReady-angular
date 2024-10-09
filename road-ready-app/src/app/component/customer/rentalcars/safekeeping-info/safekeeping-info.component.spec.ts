import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafekeepingInfoComponent } from './safekeeping-info.component';

describe('SafekeepingInfoComponent', () => {
  let component: SafekeepingInfoComponent;
  let fixture: ComponentFixture<SafekeepingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafekeepingInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafekeepingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
