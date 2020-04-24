import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../core/widget';
import { Dashboard } from '../core/dashboard';
import { WidgetContainer } from '../core/widget-container';

@Component({
	selector: 'ngdash-bootstrap-card-widget-header',
	template: `
		<div class="card-header">
			<div class="title" 
				[innerHtml]="widget.config.title">
			</div>
			<div class="btn-group btn-group-sm">
				<button type="button" 
					class="btn btn-light"
					(click)="remove()">
					<i class="fa fa-trash"></i>
				</button>
			</div>
		</div>
  	`,
	styles: [
		`.card-header { display : flex; align-items: center; }`,
		`.title { flex-grow : 1; }`,
	]
})
export class BootstrapCardWidgetHeaderComponent {
	@Input() widget: Widget;
	@Input() container: WidgetContainer;
	@Input() dashboard: Dashboard;

	remove() {
		this.container.removeWidget(this.widget);
	}
}
