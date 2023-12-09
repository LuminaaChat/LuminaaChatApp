import { TestBed } from '@angular/core/testing';

import { ServerChoosenGuard } from './server-chosen.guard';

describe('ServerChoosenGuard', () => {
  let guard: ServerChoosenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ServerChoosenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
