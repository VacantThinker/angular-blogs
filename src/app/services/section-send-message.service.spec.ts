import { TestBed } from '@angular/core/testing';

import { SectionSendMessageService } from './section-send-message.service';

describe('SectionSendMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectionSendMessageService = TestBed.get(SectionSendMessageService);
    expect(service).toBeTruthy();
  });
});
