import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedcarNavbarComponent } from './usedcar-navbar.component';

describe('UsedcarNavbarComponent', () => {
  let component: UsedcarNavbarComponent;
  let fixture: ComponentFixture<UsedcarNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedcarNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedcarNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
