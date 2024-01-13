import { TestBed } from '@angular/core/testing';

import { DivisionsApiService } from './divisions-api.service';

describe('DivisionsApiService', () => {
  let service: DivisionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
