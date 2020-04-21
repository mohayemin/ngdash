import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDashComponent } from './ng-dash.component';
import { TextWidget } from './test-doubles/text-widget';
import { BrowserModule } from '@angular/platform-browser';
import { NgDashResolver } from './ng-dash-resolver';
import { FourColumnLayoutComponent } from './test-doubles/four-column-layout/four-column-layout.component';
import { WidgetContainerDirective } from './layout/widget-container.directive';

describe('NgDashComponent', () => {
  it('should create', () => {
    let fixture = createComponentFixture();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should create the layout element', ()=>{
    let fixture = createComponentFixture();
    fixture.detectChanges();
    let dashboardElement = fixture.nativeElement as HTMLElement;
    let layoutElement = dashboardElement.querySelector("ngdash-four-column-layout");
    expect(layoutElement).toBeDefined();
  });

  it('should create 2 widgets', ()=>{
    let fixture = createComponentFixture();
    fixture.detectChanges();
    let dashboardElement = fixture.nativeElement as HTMLElement;
    let widgetElements = dashboardElement.querySelectorAll("ngdash-text-widget");
    expect(widgetElements.length).toBe(2);
  });

  function createComponentFixture() {
    TestBed.configureTestingModule({
      declarations: [
        WidgetContainerDirective,
        FourColumnLayoutComponent,
        NgDashComponent
      ],
      imports: [BrowserModule]
    });

    let fixture = TestBed.createComponent(NgDashComponent);
    TestBed.inject(NgDashResolver)
      .bindWidget("text", TextWidget)
      .bindLayout("four-column", FourColumnLayoutComponent);
    let component = fixture.componentInstance;

    component.data = {
      config: {},
      layoutType: "four-column",
      widgets: [
        { type: "text", containerId: "1", order: 1, config: { text: "first one" } }
        , { type: "text", containerId: "2", order: 1, config: { text: "the second" } }
      ]
    }

    return fixture;
  }
});
