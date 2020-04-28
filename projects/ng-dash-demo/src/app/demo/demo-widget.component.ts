import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Widget, Dashboard, NgDashComponent } from 'projects/ng-dash/src/public-api';
import { WidgetContainer } from 'projects/ng-dash/src/lib/core/widget-container';

@Component({
	selector: 'ng-dash-demo-widget',
	template: `
	<div class="demo-widget">
		<h5>
			{{widget.config.title}} 
		</h5>
		<h6>
			The entire widget is custom. Not using the default bootstrap card widget.
		</h6>
    </div>
  `,
	styles: [
		`.demo-widget { padding: 10px; background-color: lightpink;}`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@NgDashComponent('widget', 'demo')
export class DemoWidgetComponent {
	@Input() widget: Widget;
	@Input() container: WidgetContainer;
	@Input() dashboard: Dashboard;

	constructor(private crd: ChangeDetectorRef) {
	}

	ngOnInit() {
		this.dashboard.events.widgetSort.subscribe(_ => this.crd.detectChanges());
		this.dashboard.events.widgetTransfer.subscribe(_ => this.crd.detectChanges());
	}
}


