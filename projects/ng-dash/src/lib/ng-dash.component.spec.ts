import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDashComponent } from './ng-dash.component';
import { FourColumnLayoutComponent } from './test-doubles/four-column-layout/four-column-layout.component';
import { TextWidgetComponent } from './test-doubles/text-widget/text-widget.component';
import { Dashboard } from './dashboard/dashboard';
import { Widget } from './widget/widget';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('NgDashComponent', () => {
  let component: NgDashComponent;
  let fixture: ComponentFixture<NgDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgDashComponent, FourColumnLayoutComponent, TextWidgetComponent],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [NgDashComponent]
      }
    });

    fixture = TestBed.createComponent(NgDashComponent);
    component = fixture.componentInstance;
    component.dashboard = new Dashboard(
      [
        new Widget({ containerId: 0, index: 1 }, { text: "first one" }, TextWidgetComponent)
        , new Widget({ containerId: 0, index: 1 }, { text: "the second" }, TextWidgetComponent)
      ],
      FourColumnLayoutComponent.lid,
      {}
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the layout element', () => {
    let dashboardElement = fixture.nativeElement as HTMLElement;
    let layoutElement = dashboardElement.querySelector("ngdash-four-column-layout");
    expect(layoutElement).toBeDefined();
  });

  it('should create 2 widgets', () => {
    let dashboardElement = fixture.nativeElement as HTMLElement;
    let widgetElements = dashboardElement.querySelectorAll("ngdash-text-widget");
    expect(widgetElements.length).toBe(2);
  });
});
