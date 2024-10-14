import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyactivityComponent } from './myactivity.component';

describe('MyactivityComponent', () => {
  let component: MyactivityComponent;
  let fixture: ComponentFixture<MyactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyactivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
