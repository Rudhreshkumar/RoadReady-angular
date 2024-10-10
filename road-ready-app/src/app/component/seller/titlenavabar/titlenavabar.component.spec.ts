import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlenavabarComponent } from './titlenavabar.component';

describe('TitlenavabarComponent', () => {
  let component: TitlenavabarComponent;
  let fixture: ComponentFixture<TitlenavabarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlenavabarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlenavabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
