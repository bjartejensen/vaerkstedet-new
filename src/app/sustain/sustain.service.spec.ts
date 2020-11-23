import { TestBed } from '@angular/core/testing';

import { SustainService } from './sustain.service';

describe('SustainService', () => {
  let service: SustainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SustainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
