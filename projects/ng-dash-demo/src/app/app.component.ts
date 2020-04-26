import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Dashboard, Widget } from 'projects/ng-dash/src/public-api';
import { WidgetMoveEvent } from 'projects/ng-dash/src/lib/core/widget-move-event';

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
	enableDragDrop: boolean = true;
	dashboard: Dashboard;

	messages: string[] = [];
	eventCount = 0;

	constructor() {
		this.dashboard = new Dashboard(
			[
				new Widget({ containerId: 0, index: 0 }, { title: 'using default widget', content: 'no custom header or body is used here' }),
				new Widget({ containerId: 0, index: 1 }, { title: 'using custom widget' }, { widgetId: 'demo' }),
				new Widget({ containerId: 1, index: 0 }, { content: 'but the content is default' }, { headerId: 'custom' })
			],
			'ngdash-bootstrap-r1-c2-layout',
			{}
		);

		this.dashboard.events.widgetMove.subscribe(event => this.widgetMoved(event));
		this.dashboard.events.widgetRemove.subscribe(event => this.widgetRemoved(event));
		this.dashboard.events.widgetToggle.subscribe(event => this.widgetToggled(event));
	}

	widgetMoved(event: WidgetMoveEvent) {
		if (event.widget.state.containerId === event.previousContainerId) {
			this.logEvent('Widget moved within same container');
		} else {
			this.logEvent('Widget moved between containers');
		}
	}

	widgetRemoved(widget: Widget) {
		this.logEvent('Widget removed');
	}

	widgetToggled(widget: Widget) {
		this.logEvent('Widget toggled');
	}

	logEvent(message: string) {
		this.messages.unshift(`${++this.eventCount}: ${message}`);
	}
}
