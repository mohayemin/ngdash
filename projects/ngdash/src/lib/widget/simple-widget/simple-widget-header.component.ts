import { Component, Input } from '@angular/core';
import { Widget } from '../../core/widget';
import { Dashboard } from '../../core/dashboard';
import { WidgetContainer } from '../../core/widget-container';

@Component({
	selector: 'ngdash-simple-widget-header',
	template: `
		<div class="d-flex align-items-center">
			<div class="title" 
				[innerHtml]="widget.config.title">
			</div>
			<ngdash-widget-header-button-set 
				[widget]=widget
				[container]="container"
				[dashboard]="dashboard">
			</ngdash-widget-header-button-set>
		</div>
  	`,
	styles: [
		`.title { flex-grow : 1; }`,
	]
})
export class SimpleWidgetHeaderComponent {
	@Input() widget: Widget;
	@Input() container: WidgetContainer;
	@Input() dashboard: Dashboard;
}
