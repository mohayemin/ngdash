import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Dashboard } from '../core/dashboard';
import { WidgetContainer } from '../core/widget-container';

@Component({
	selector: 'ngdash-bootstrap-r2-c2-layout',
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
	<div class="row">
	<div class="col-sm">
		<ngdash-widget-container 
			[container]="containers[2]" 
			[dashboard]="dashboard">
		</ngdash-widget-container>
      </div>
      <div class="col-sm">
		<ngdash-widget-container 
			[container]="containers[3]" 
			[dashboard]="dashboard">
		</ngdash-widget-container>
      </div>
	</div>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BootstrapR2C2LayoutComponent {
	@Input() dashboard: Dashboard;
	containers: WidgetContainer[];
	
	ngOnInit() {
		this.containers = [0, 1, 2, 3].map(id => this.dashboard.getContainer(id));
	}
}
