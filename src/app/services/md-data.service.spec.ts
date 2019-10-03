import {TestBed} from '@angular/core/testing';

import {MdDataService} from './md-data.service';

describe('MdDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MdDataService = TestBed.get(MdDataService);
    expect(service).toBeTruthy();
  });
});
