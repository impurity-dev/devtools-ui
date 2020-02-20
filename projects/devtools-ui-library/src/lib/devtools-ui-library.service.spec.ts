import { TestBed } from '@angular/core/testing';

import { DevtoolsUiLibraryService } from './devtools-ui-library.service';

describe('DevtoolsUiLibraryService', () => {
  let service: DevtoolsUiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevtoolsUiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
