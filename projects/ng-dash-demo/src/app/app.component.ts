import { Component } from '@angular/core';
import { DashboardData } from 'projects/ng-dash/src/lib/dashboard/dashboard-data';
import { NgDashResolver } from 'projects/ng-dash/src/lib/ng-dash-resolver';
import { DemoWidgetComponent } from './demo-widget.component';
import { Dashboard, Widget } from 'projects/ng-dash/src/public-api';
import { BootstrapR1C2LayoutComponent } from 'projects/ng-dash/src/lib/layout/layouts/bootstrap-r1-c2-layout.component';

@Component({
  selector: 'ng-dash-demo-root',
  template: `
    <div class="container">
      <h1>ng-dash Demo</h1>
      <ngdash [dashboard]="dashboard"></ngdash>
    </div>
  `,
  styles: []
})
export class AppComponent {
  dashboard: Dashboard;
  constructor() {
    this.dashboard = new Dashboard(
      [
        new Widget(0, 0, {}, DemoWidgetComponent),
        new Widget(0, 1, {}, DemoWidgetComponent),
        new Widget(1, 0, {}, DemoWidgetComponent)
      ],
      BootstrapR1C2LayoutComponent,
      {}
    )
  }
}
