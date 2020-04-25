import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Dashboard } from '../core/dashboard';
import { WidgetContainer } from '../core/widget-container';
import { NgDashComponent } from '../core/ng-dash-component.decorator';

@Component({
	selector: 'ngdash-bootstrap-r1-c2-layout',
	template: `
    <div class="row">
      <div class="col-sm">
		<ngdash-widget-container 
			[container]="containers[0]" 
			[dashboard]="dashboard">
		</ngdash-widget-container>
      </div>
      <div class="col-sm">
		<ngdash-widget-container 
			[container]="containers[1]" 
			[dashboard]="dashboard">
		</ngdash-widget-container>
      </div>
    </div>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@NgDashComponent('layout', 'ngdash-bootstrap-r1-c2-layout')
@NgDashComponent('layout', 'default')
export class BootstrapR1C2LayoutComponent {
	@Input() dashboard: Dashboard;
	containers: WidgetContainer[];
	
	ngOnInit() {
		this.containers = [0, 1].map(id => this.dashboard.getContainer(id));
	}
}
