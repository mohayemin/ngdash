import { Component } from '@angular/core';
import { DemoWidgetComponent } from './demo-widget.component';
import { Dashboard, Widget } from 'projects/ng-dash/src/public-api';
import { BootstrapR1C2LayoutComponent } from 'projects/ng-dash/src/lib/layout/layouts/bootstrap-r1-c2-layout.component';

@Component({
  selector: 'ng-dash-demo-root',
  template: `
    <div class="container">
      <h1>ng-dash Demo</h1>
      <div>
        <label>
          <input type="checkbox" [(ngModel)]="enableDragDrop"/> Enable Drag Drop
        </label>
      </div>
      <ngdash [dashboard]="dashboard"
        [enableDragDrop]="enableDragDrop"></ngdash>
    </div>
  `,
  styles: []
})
export class AppComponent {
  enableDragDrop: boolean;
  dashboard: Dashboard;
  constructor() {
    this.dashboard = new Dashboard(
      [
        new Widget({containerId: 0, index: 0}, {}, DemoWidgetComponent),
        new Widget({containerId: 0, index: 1}, {}, DemoWidgetComponent),
        new Widget({containerId: 1, index: 0}, {}, DemoWidgetComponent)
      ],
      BootstrapR1C2LayoutComponent,
      {}
    )
  }
}
