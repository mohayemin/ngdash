import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Dashboard } from '../core/dashboard';
import { WidgetContainer } from '../core/widget-container';

@Component({
	selector: 'test-layout',
	template: `<ngdash-widget-container [container]="container"></ngdash-widget-container>`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestLayoutComponent {
	@Input() dashboard: Dashboard;
	container: WidgetContainer;

	ngOnInit() {
		this.container = this.dashboard.getContainer(0);
	}
}