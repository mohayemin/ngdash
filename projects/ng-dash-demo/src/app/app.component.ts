import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DemoWidgetComponent } from './demo-widget.component';
import { Dashboard, Widget } from 'projects/ng-dash/src/public-api';
import { BootstrapR1C2LayoutComponent } from 'projects/ng-dash/src/lib/layout/layouts/bootstrap-r1-c2-layout.component';
import { WidgetMoveEvent } from 'projects/ng-dash/src/lib/dashboard/widget-move-event';

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
        (moveWidget)="widgetMoved($event)"
        (removeWidget)="widgetRemoved($event)"
        [enableDragDrop]="enableDragDrop"></ngdash>

      <div class="alert alert-info mt-3">
        <h4>Interactions</h4>
        <ul>
          <li *ngFor="let message of messages">{{message}}</li>
        </ul>
      </div>
    </div>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	enableDragDrop: boolean;
	dashboard: Dashboard;

	messages: string[] = [];
	constructor() {
		this.dashboard = new Dashboard(
			[
				new Widget({ containerId: 0, index: 0 }, {}, DemoWidgetComponent),
				new Widget({ containerId: 0, index: 1 }, {}, DemoWidgetComponent),
				new Widget({ containerId: 1, index: 0 }, {}, DemoWidgetComponent)
			],
			BootstrapR1C2LayoutComponent.lid,
			{}
		)
	}

	widgetMoved(event: WidgetMoveEvent) {
		const num = this.messages.length + 1;
		if (event.widget.position.containerId === event.previousPosition.containerId) {
			this.messages.unshift(`${num}: Widget moved within same container`);
		} else {
			this.messages.unshift(`${num}: Widget moved between containers`);
		}
	}

	widgetRemoved(widget: Widget) {
		const num = this.messages.length + 1;
		this.messages.unshift(`${num}: Widget removed`);
	}
}
