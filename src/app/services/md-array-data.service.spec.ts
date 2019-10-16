import {TestBed} from '@angular/core/testing';

import {MdArrayDataService} from './md-array-data.service';

describe('MdDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MdArrayDataService = TestBed.get(MdArrayDataService);
    expect(service).toBeTruthy();
  });
});
