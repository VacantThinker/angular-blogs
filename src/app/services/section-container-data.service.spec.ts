import {TestBed} from '@angular/core/testing';

import {SectionContainerDataService} from './section-container-data.service';

describe('MdDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectionContainerDataService = TestBed.get(SectionContainerDataService);
    expect(service).toBeTruthy();
  });
});
