import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevtoolsUiComponent } from './devtools-ui.component';

describe('DevtoolsUiComponent', () => {
  let component: DevtoolsUiComponent;
  let fixture: ComponentFixture<DevtoolsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevtoolsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevtoolsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
