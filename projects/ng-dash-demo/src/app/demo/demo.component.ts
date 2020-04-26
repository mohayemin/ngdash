import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Dashboard, Widget, WidgetMoveEvent, DashboardData } from 'projects/ng-dash/src/public-api';

@Component({
	selector: 'ng-dash-demo-demo',
	templateUrl: 'demo.component.html',
	styles: [
		`.interactions { font-family: monospace }`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {
	enableDragDrop: boolean = true;
	dashboard: Dashboard;

	messages: string[] = [];
	eventCount = 0;

	constructor() {
		const dashboardData: DashboardData = {
			widgets: [
				{ state: { containerId: 0, index: 0 }, config: { title: 'using default widget', content: 'no custom header or body is used here' } },
				{ state: { containerId: 0, index: 1 }, config: { title: 'using custom widget' }, ui: { widgetId: 'demo' } },
				{ state: { containerId: 1, index: 0 }, config: { content: 'but the content is default' }, ui: { headerId: 'custom' } }
			]
		};
		this.dashboard = new Dashboard(dashboardData);

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
