import { Component } from '@angular/core';
import { DashboardData } from 'projects/ng-dash/src/lib/dashboard/dashboard-data';

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
  constructor() {
    this.dashboardData = {
      config: {},
      layoutType: "single",
      widgets: [
        {type: "html", order:0, config: {html: "First one"}, containerId: "0"},
        {type: "html", order:0, config: {html: "Second one"}, containerId: "0"}
      ]
    }
  }
}
