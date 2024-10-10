import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerintentComponent } from './sellerintent.component';

describe('SellerintentComponent', () => {
  let component: SellerintentComponent;
  let fixture: ComponentFixture<SellerintentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerintentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerintentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
