import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDashComponent } from './ng-dash.component';
import { TextWidget } from '../test-doubles/text-widget';
import { Dashboard } from './dashboard/dashboard';

describe('NgDashComponent', () => {
  let component: NgDashComponent;
  let fixture: ComponentFixture<NgDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgDashComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDashComponent);
    component = fixture.componentInstance;
    component.dashboard = new Dashboard();
    component.dashboard.widgets = [
      new TextWidget("", "", 0, { text: "this is my text" })
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
