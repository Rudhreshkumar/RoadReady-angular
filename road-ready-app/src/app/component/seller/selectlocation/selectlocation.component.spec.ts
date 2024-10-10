import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectlocationComponent } from './selectlocation.component';

describe('SelectlocationComponent', () => {
  let component: SelectlocationComponent;
  let fixture: ComponentFixture<SelectlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectlocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
