import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import {
	Dashboard,
	Widget,
	WidgetMoveEvent,
	DashboardData,
	WidgetSortEvent,
} from 'projects/ngdash/src/public-api';

@Component({
	selector: 'ngdash-demo-demo',
	templateUrl: 'demo.component.html',
	styles: [
		`.interactions { font-family: monospace }`,
		`[wid='0'] .card { background-color: lightblue }`,
		`[wid='1'] .card { background-color: lightgreen }`,
		`[wid='2'] .card { background-color: lightyellow }`,
	],
	encapsulation: ViewEncapsulation.None, // disabled to apply custom style to widgets
})
export class DemoComponent {
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

		this.logEvent('dashbaord loaded');
	}

	changeDragState(event: Event) {
		const checkbox = event.target as HTMLInputElement;
		this.dashboard.setOption('isDragEnabled', checkbox.checked);
	}

	getDefaultData(): DashboardData {
		return {
			containers: [
				{ // Container 1
					widgets: [
						{ // Widget 1.1
							config: {
								title: 'using default widget',
								content: 'no custom header or body is used here'
							}
						},
						{ // Widget 1.2
							config: {
								title: 'another default widget',
								content: 'With <i>different</i> content'
							}
						}
					]
				},
				{ // Container 2
					widgets: [
						{ // Widget 2.1
							ui: { headerComponentId: 'custom-header' },
							config: { content: 'custom header, but the content is default' }
						},
						{ // Widget 2.2
							ui: { bodyComponentId: 'custom-body' },
							config: { title: 'using custom widget body, but default component with default header' }
						},
						{ // Widget 2.3
							ui: { headerComponentId: 'custom-header', bodyComponentId: 'custom-body' },
						},
						{ // Widget 2.4
							ui: { widgetComponentId: 'custom-widget' },
							config: { title: 'using custom widget' }
						}
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
