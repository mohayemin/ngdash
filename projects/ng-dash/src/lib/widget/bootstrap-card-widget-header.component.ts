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
			<div class="btn-group-sm">
				<button type="button"
					[hidden]="widget.state['isCollapsed']"
					title="Collapse widget" 
					class="btn btn-light"
					(click)="widget.state['isCollapsed']=true">
					<i class="fas fa-minus"></i>
				</button>
				<button type="button"
					[hidden]="!widget.state['isCollapsed']"
					title="Expand widget"
					class="btn btn-light"
					(click)="widget.state['isCollapsed']=false">
					<i class="fas fa-plus"></i>
				</button>
				<button type="button"
					title="Remove widget"
					class="btn btn-light"
					(click)="remove()">
					<i class="far fa-trash-alt"></i>
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
