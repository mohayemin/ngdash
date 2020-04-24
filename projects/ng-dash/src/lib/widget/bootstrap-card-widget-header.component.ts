import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../core/widget';
import { Dashboard } from '../core/dashboard';
import { NgDashWidgetHeader } from '../core/registry/widget-header.decorator';

@Component({
	selector: 'ngdash-bootstrap-card-widget-header',
	template: `
		<div class="card-header">
			<div class="title" 
				[innerHtml]="widget.config.title">
			</div>
			<div class="btn-group btn-group-sm">
				<button type="button" class="btn btn-light"><i class="fa fa-trash"></i></button>
			</div>
		</div>
  	`,
	styles: [
		`.card-header { display : flex; align-items: center; }`,
		`.title { flex-grow : 1; }`,
	]
})
@NgDashWidgetHeader('default')
@NgDashWidgetHeader('ngdash-bootstrap-card-widget-header')
export class BootstrapCardWidgetHeaderComponent {
	@Input() widget: Widget;
	@Input() dashboard: Dashboard;
}
