import { TestBed } from '@angular/core/testing';

import { CustommadeService } from './custommade.service';

describe('CustommadeService', () => {
  let service: CustommadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustommadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
