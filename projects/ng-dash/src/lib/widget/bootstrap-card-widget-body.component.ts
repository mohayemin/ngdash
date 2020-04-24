import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../core/widget';
import { Dashboard } from '../../public-api';
import { WidgetContainer } from '../core/widget-container';

@Component({
	selector: 'ngdash-bootstrap-card-widget-body',
	template: `
		<div class="card-body"
			[innerHtml]="widget.config.content">
  		</div>
  	`,
	styles: [
	]
})
export class BootstrapCardWidgetBodyComponent {
	@Input() widget: Widget;
	@Input() container: WidgetContainer;
	@Input() dashboard: Dashboard;
}
