import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../core/widget';
import { Dashboard } from '../../public-api';
import { WidgetContainer } from '../core/widget-container';
import { NgDashComponent } from '../core/ng-dash-component.decorator';

@Component({
	selector: 'ngdash-bootstrap-card-widget-body',
	template: `
		<div [innerHtml]="widget.config.content"></div>
  	`,
	styles: [
	]
})
@NgDashComponent('widget-body', 'default')
@NgDashComponent('widget-body', 'ngdash-bootstrap-card-widget-body')
export class BootstrapCardWidgetBodyComponent {
	@Input() widget: Widget;
	@Input() container: WidgetContainer;
	@Input() dashboard: Dashboard;
}
