import { TestBed } from '@angular/core/testing';

import { LoadingStatusService } from './loading-status.service';

describe('LoadingStatusService', () => {
  let service: LoadingStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
