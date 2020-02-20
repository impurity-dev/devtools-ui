import { TestBed } from '@angular/core/testing';

import { DevtoolsUiService } from './devtools-ui.service';

describe('DevtoolsUiService', () => {
  let service: DevtoolsUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevtoolsUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
