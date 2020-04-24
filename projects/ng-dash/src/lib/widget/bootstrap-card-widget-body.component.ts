import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../core/widget';
import { Dashboard } from '../../public-api';
import { NgDashWidgetBody } from '../core/registry/widget-body.decorator';

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
@NgDashWidgetBody('default')
@NgDashWidgetBody('ngdash-bootstrap-card-widget-body')
export class BootstrapCardWidgetBodyComponent {
	@Input() widget: Widget;
	@Input() dashboard: Dashboard;
}
