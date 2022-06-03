import { TestBed } from '@angular/core/testing';

import { ApiesDataService } from './apies-data.service';

describe('ApiesDataService', () => {
  let service: ApiesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
