import {TestBed} from '@angular/core/testing';

import {SectionSendDataService} from './section-send-data.service';

describe('SectionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectionSendDataService = TestBed.get(SectionSendDataService);
    expect(service).toBeTruthy();
  });
});
