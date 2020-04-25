import { Component, Input } from '@angular/core';
import { Widget } from '../core/widget';
import { Dashboard } from '../core/dashboard';
import { WidgetContainer } from '../core/widget-container';
import { NgDashComponent } from '../core/ng-dash-component.decorator';

@Component({
	selector: 'ngdash-bootstrap-card-widget-header',
	template: `
		<div class="d-flex align-items-center">
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
		`.title { flex-grow : 1; }`,
		`button { background-color: transparent; border-color: transparent;}`
	]
})
@NgDashComponent('widget-header', 'default')
@NgDashComponent('widget-header', 'ngdash-bootstrap-card-widget-header')
export class BootstrapCardWidgetHeaderComponent {
	@Input() widget: Widget;
	@Input() container: WidgetContainer;
	@Input() dashboard: Dashboard;

	remove() {
		this.container.removeWidget(this.widget);
	}
}
