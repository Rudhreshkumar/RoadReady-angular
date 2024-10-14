import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedcarComponent } from './usedcar.component';

describe('UsedcarComponent', () => {
  let component: UsedcarComponent;
  let fixture: ComponentFixture<UsedcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedcarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
