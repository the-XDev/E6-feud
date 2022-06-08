import { TestBed } from '@angular/core/testing';

import { E621Service } from './e621.service';

describe('E621Service', () => {
  let service: E621Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(E621Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
