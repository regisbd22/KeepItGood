import { TestBed } from '@angular/core/testing';

import { ChargeServiceService } from './charge-service.service';

describe('ChargeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChargeServiceService = TestBed.get(ChargeServiceService);
    expect(service).toBeTruthy();
  });
});
