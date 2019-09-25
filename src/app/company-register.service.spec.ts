import { TestBed } from '@angular/core/testing';

import { CompanyRegisterService } from './company-register.service';

describe('CompanyRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyRegisterService = TestBed.get(CompanyRegisterService);
    expect(service).toBeTruthy();
  });
});
