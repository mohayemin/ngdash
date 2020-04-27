import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Dashboard, Widget, WidgetMoveEvent, DashboardData, WidgetSortEvent } from 'projects/ng-dash/src/public-api';

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
		const dashboardData: DashboardData = JSON.parse(localStorage.getItem('dashboard')) || this.getDefaultData();
		this.dashboard = new Dashboard(dashboardData);

		this.dashboard.events.widgetTransfer.subscribe(event => this.widgetTransfered(event));
		this.dashboard.events.widgetSort.subscribe(event => this.widgetSorted(event));
		this.dashboard.events.widgetRemove.subscribe(event => this.widgetRemoved(event));
		this.dashboard.events.widgetToggle.subscribe(event => this.widgetToggled(event));
	}

	getDefaultData(): DashboardData {
		return {
			containers: [
				{
					index: 0,
					widgets: [
						{ index: 0, config: { title: 'using default widget', content: 'no custom header or body is used here' } },
						{ index: 1, config: { title: 'using custom widget' }, ui: { widgetId: 'demo' } },
					]
				},
				{
					index: 0,
					widgets: [
						{ index: 0, config: { content: 'but the content is default' }, ui: { headerId: 'custom' } }
					]
				}
			]
		}
	}

	widgetSorted(event: WidgetSortEvent) {
		this.logEvent('Widget moved within same container');
	}

	widgetTransfered(event: WidgetMoveEvent) {
		this.logEvent('Widget moved between containers');
	}

	widgetRemoved(widget: Widget) {
		this.logEvent('Widget removed');
	}

	widgetToggled(widget: Widget) {
		this.logEvent('Widget toggled');
	}

	resetData() {
		localStorage.removeItem('dashboard');
		window.location.reload();
	}

	logEvent(message: string) {
		this.messages.unshift(`${++this.eventCount}: ${message}`);
		localStorage.setItem('dashboard', JSON.stringify(this.dashboard.getData()));
	}
}
