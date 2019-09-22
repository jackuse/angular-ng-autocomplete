import { TestBed } from '@angular/core/testing';

import { AutocompleteLibService } from './autocomplete-lib.service';

describe('AutocompleteLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutocompleteLibService = TestBed.get(AutocompleteLibService);
    expect(service).toBeTruthy();
  });
});
