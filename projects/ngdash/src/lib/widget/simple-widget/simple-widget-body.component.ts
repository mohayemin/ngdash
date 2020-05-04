import { Component, Input } from '@angular/core';
import { Widget } from '../../core/widget';
import { WidgetContainer } from '../../core/widget-container';
import { Dashboard } from '../../core/dashboard';

@Component({
	selector: 'ngdash-simple-widget-body',
	template: `
		<div [innerHtml]="widget.config.content"></div>
  	`,
	styles: [
	]
})

export class SimpleWidgetBodyComponent {
	@Input() widget: Widget;
	@Input() container: WidgetContainer;
	@Input() dashboard: Dashboard;
}
