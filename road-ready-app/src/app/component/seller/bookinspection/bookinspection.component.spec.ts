import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinspectionComponent } from './bookinspection.component';

describe('BookinspectionComponent', () => {
  let component: BookinspectionComponent;
  let fixture: ComponentFixture<BookinspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookinspectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
