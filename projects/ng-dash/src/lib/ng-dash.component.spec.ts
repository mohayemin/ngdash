import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDashComponent } from './ng-dash.component';
import { TextWidget } from './test-doubles/text-widget';
import { BrowserModule } from '@angular/platform-browser';
import { NgDashResolver } from './ng-dash-resolver';
import { FourColumnLayoutComponent } from './test-doubles/four-column-layout/four-column-layout.component';
import { WidgetContainerDirective } from './layout/widget-container.directive';

describe('NgDashComponent', () => {
  let component: NgDashComponent;
  let fixture: ComponentFixture<NgDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WidgetContainerDirective,
        FourColumnLayoutComponent,
        NgDashComponent
      ],
      imports: [BrowserModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDashComponent);
    TestBed.inject(NgDashResolver)
      .bindWidget("text", TextWidget)
      .bindLayout("four-column", FourColumnLayoutComponent);
    component = fixture.componentInstance;

    component.data = {
      config: {},
      layoutType: "four-column",
      widgets: [
        { type: "text", containerId: "1", order: 1, config: { text: "first one" } }
        , { type: "text", containerId: "2", order: 1, config: { text: "the second" } }
      ]
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
