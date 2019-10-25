import {TestBed} from '@angular/core/testing';

import {IndexLoadMessageService} from './index-load-message.service';

describe('IndexLoadMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndexLoadMessageService = TestBed.get(IndexLoadMessageService);
    expect(service).toBeTruthy();
  });
});
