import { TestBed } from '@angular/core/testing';

import { RentalServiceService } from './rental-service.service';

describe('RentalServiceService', () => {
  let service: RentalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
