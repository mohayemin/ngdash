import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDashComponent } from './ng-dash.component';
import { TextWidget } from '../test-doubles/text-widget';
import { Dashboard } from './dashboard/dashboard';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetFactory } from './widget/widget-factory';

describe('NgDashComponent', () => {
  let component: NgDashComponent;
  let fixture: ComponentFixture<NgDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgDashComponent],
      imports: [BrowserModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDashComponent);
    let widgetFactory = TestBed.inject(WidgetFactory);
    widgetFactory.bind("text", TextWidget);
    component = fixture.componentInstance;

    component.data = {
      config: {},
      widgets: [
        { type: "text", containerId: "", order: 1, config: { text: "first one" } }
        , { type: "text", containerId: "", order: 1, config: { text: "the second" } }
      ]
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
