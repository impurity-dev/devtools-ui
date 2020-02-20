import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevtoolsUiLibraryComponent } from './devtools-ui-library.component';

describe('DevtoolsUiLibraryComponent', () => {
  let component: DevtoolsUiLibraryComponent;
  let fixture: ComponentFixture<DevtoolsUiLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevtoolsUiLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevtoolsUiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
