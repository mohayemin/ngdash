import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDashComponent } from './ng-dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgDashResolver } from './ng-dash-resolver';
import { FourColumnLayoutComponent } from './test-doubles/four-column-layout/four-column-layout.component';
import { WidgetWrapperComponent } from './layout/widget-wrapper/widget-wrapper.component';
import { WidgetContainerComponent } from './layout/widget-container/widget-container.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextWidgetComponent } from './test-doubles/text-widget/text-widget.component';

describe('NgDashComponent', () => {
  it('should create', () => {
    let fixture = createComponentFixture();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should create the layout element', () => {
    let fixture = createComponentFixture();
    fixture.detectChanges();
    let dashboardElement = fixture.nativeElement as HTMLElement;
    let layoutElement = dashboardElement.querySelector("ngdash-four-column-layout");
    expect(layoutElement).toBeDefined();
  });

  it('should create 2 widgets', () => {
    let fixture = createComponentFixture();
    fixture.detectChanges();
    let dashboardElement = fixture.nativeElement as HTMLElement;
    let widgetElements = dashboardElement.querySelectorAll("ngdash-text-widget");
    expect(widgetElements.length).toBe(2);
  });

  function createComponentFixture() {
    TestBed.configureTestingModule({
      declarations: [
        NgDashComponent,
        WidgetWrapperComponent,
        WidgetContainerComponent,
        FourColumnLayoutComponent,
      ],
      imports: [
        BrowserModule,
        DragDropModule
      ]
    });

    let fixture = TestBed.createComponent(NgDashComponent);
    TestBed.inject(NgDashResolver)
      .bindWidget("text", TextWidgetComponent)
      .bindLayout("four-column", FourColumnLayoutComponent);
    let component = fixture.componentInstance;

    component.data = {
      config: {},
      layoutType: "four-column",
      widgets: [
        { type: "text", containerId: 0, order: 1, config: { text: "first one" } }
        , { type: "text", containerId: 1, order: 1, config: { text: "the second" } }
      ]
    }

    return fixture;
  }
});
