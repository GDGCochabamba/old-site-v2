import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { PartnerService } from './partner.service';

describe('PartnerService', () => {
  const partnerServiceMock = {
    getAll: () => of([])
  };

  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: PartnerService, useValue: partnerServiceMock }]
    })
  );

  it('should be created', () => {
    const service: PartnerService = TestBed.get(PartnerService);
    expect(service).toBeTruthy();
  });
});
