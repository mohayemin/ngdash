import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Widget, Dashboard, NgDashComponent } from 'projects/ng-dash/src/public-api';
import { WidgetContainer } from 'projects/ng-dash/src/lib/core/widget-container';

@Component({
	selector: 'ng-dash-demo-widget',
	template: `
	<div class="demo-widget" 
		[class.alter]="container.index === 1">
		<h5>
			{{widget.config.title}} 
			<span class="badge badge-primary">Container: {{container.index}}</span>&nbsp;
			<span class="badge badge-primary">Index: {{widget.index}}</span>
		</h5>
		<h6>
			The entire widget is custom. Not using the default bootstrap card widget.
			Drag it around, the position values below will be updated accordingly.
		</h6>
    </div>
  `,
	styles: [
		`.demo-widget { padding: 10px; background-color: lightpink;}`,
		`.demo-widget.alter {background-color: lightblue}`
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


