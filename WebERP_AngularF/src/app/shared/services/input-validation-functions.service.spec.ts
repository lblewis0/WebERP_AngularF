import { TestBed } from '@angular/core/testing';

import { InputValidationFunctionsService } from './input-validation-functions.service';

describe('InputValidationFunctionsService', () => {
  let service: InputValidationFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputValidationFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
