import { Component } from '@angular/core';
import { DashboardData } from 'projects/ng-dash/src/lib/dashboard/dashboard-data';
import { NgDashResolver } from 'projects/ng-dash/src/lib/ng-dash-resolver';
import { DemoWidgetComponent } from './demo-widget.component';

@Component({
  selector: 'ng-dash-demo-root',
  template: `
    <h1>ng-dash Demo</h1>
    <ngdash [data]="dashboardData"></ngdash>
  `,
  styles: []
})
export class AppComponent {
  dashboardData: DashboardData;
  constructor(ngdashResolver: NgDashResolver) {
    ngdashResolver.bindWidget("demo", DemoWidgetComponent)

    this.dashboardData = {
      config: {},
      layoutType: "single",
      widgets: [
        { type: "demo", order: 1, config: { html: "First one" }, containerId: "0" },
        { type: "demo", order: 3, config: { html: "Second one, but ordered in 3" }, containerId: "0" },
        { type: "demo", order: 2, config: { html: "Third one, but ordered in 2" }, containerId: "0" },
      ]
    }
  }
}
