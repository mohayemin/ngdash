import { Component } from '@angular/core';
import { DashboardData } from 'projects/ng-dash/src/lib/dashboard/dashboard-data';
import { NgDashResolver } from 'projects/ng-dash/src/lib/ng-dash-resolver';
import { DemoWidgetComponent } from './demo-widget.component';

@Component({
  selector: 'ng-dash-demo-root',
  template: `
    <div class="container">
      <h1>ng-dash Demo</h1>
      <ngdash [data]="dashboardData"></ngdash>
    </div>
  `,
  styles: []
})
export class AppComponent {
  dashboardData: DashboardData;
  constructor(ngdashResolver: NgDashResolver) {
    ngdashResolver.bindWidget("demo", DemoWidgetComponent)

    this.dashboardData = {
      config: {},
      layoutType: "bs-r1-c2",
      widgets: [
        { type: "demo", order: 0, config: { html: "Started at 0-0" }, containerId: 0 },
        { type: "demo", order: 1, config: { html: "Started at 0-1" }, containerId: 0 },
        { type: "demo", order: 0, config: { html: "Started at 1-0" }, containerId: 1 },
      ]
    }
  }
}
