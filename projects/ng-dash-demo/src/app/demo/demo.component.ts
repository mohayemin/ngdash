import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Dashboard, Widget, WidgetMoveEvent } from 'projects/ng-dash/src/public-api';

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
