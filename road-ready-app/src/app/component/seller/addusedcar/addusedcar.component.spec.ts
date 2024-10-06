import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusedcarComponent } from './addusedcar.component';

describe('AddusedcarComponent', () => {
  let component: AddusedcarComponent;
  let fixture: ComponentFixture<AddusedcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddusedcarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddusedcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
