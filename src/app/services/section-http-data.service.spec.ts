import {TestBed} from '@angular/core/testing';

import {SectionHttpDataService} from './section-http-data.service';

describe('MdDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectionHttpDataService = TestBed.get(SectionHttpDataService);
    expect(service).toBeTruthy();
  });
});
