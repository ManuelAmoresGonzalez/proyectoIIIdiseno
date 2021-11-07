import { TestBed } from '@angular/core/testing';

import { ServiceLogginService } from './service-loggin.service';

describe('ServiceLogginService', () => {
  let service: ServiceLogginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLogginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
