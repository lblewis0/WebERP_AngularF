import { TestBed } from '@angular/core/testing';

import { DbContactsService } from './db-contacts.service';

describe('DbContactsService', () => {
  let service: DbContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
