import { TestBed } from '@angular/core/testing';

import { SessionHttpServiceService } from './session-http-service.service';

describe('SessionHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionHttpServiceService = TestBed.get(SessionHttpServiceService);
    expect(service).toBeTruthy();
  });
});
