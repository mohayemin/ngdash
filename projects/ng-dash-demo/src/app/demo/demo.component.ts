import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Dashboard, Widget, WidgetMoveEvent, DashboardData, WidgetSortEvent } from 'projects/ng-dash/src/public-api';

@Component({
	selector: 'ng-dash-demo-demo',
	templateUrl: 'demo.component.html',
	styles: [
		`.interactions { font-family: monospace }`,
		`[wid='0'] .card { background-color: lightblue }`,
		`[wid='1'] .card { background-color: lightgreen }`,
		`[wid='2'] .card { background-color: lightyellow }`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None, // disabled to apply custom style to widgets
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
					widgets: [
						{ uniqueId: 0, config: { title: 'using default widget', content: 'no custom header or body is used here' } },
						{ uniqueId: 1, config: { title: 'another default widget', content: 'With <i>different</i> content' } },
						{ uniqueId: 2, config: { title: 'the third default widget', content: 'With <i>different</i> <b>content</b>' } },
					]
				},
				{
					widgets: [
						{
							uniqueId: 3,
							config: {
								content: 'but the content is default'
							}, ui: { headerComponentId: 'custom' }
						},
						{ uniqueId: 4, config: { title: 'using custom widget' }, ui: { widgetComponentId: 'demo' } },
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
