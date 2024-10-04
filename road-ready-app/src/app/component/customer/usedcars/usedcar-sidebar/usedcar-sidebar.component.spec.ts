import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedcarSidebarComponent } from './usedcar-sidebar.component';

describe('UsedcarSidebarComponent', () => {
  let component: UsedcarSidebarComponent;
  let fixture: ComponentFixture<UsedcarSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedcarSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedcarSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
