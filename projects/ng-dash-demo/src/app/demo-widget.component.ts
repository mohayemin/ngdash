import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgDashWidget } from 'projects/ng-dash/src/lib/core/registry/widget.decorator';
import { Widget, Dashboard } from 'projects/ng-dash/src/public-api';

@Component({
	selector: 'ng-dash-demo-widget',
	template: `
    <div [attr.initcontainer]="widget.initialPosition.containerId">
		<h5>{{widget.config.title}}</h5>
      	<div>Initial: {{widget.initialPosition | json}}</div>
      	<div>Current: {{widget.position | json}}</div>
    </div>
  `,
	styles: [
		`:host {font-family: monospace}`,
		`[initcontainer='0'] { background-color: lightpink}`,
		`[initcontainer='1'] { background-color: lightblue}`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@NgDashWidget('demo')
export class DemoWidgetComponent {
	@Input() widget: Widget;
	@Input() dashbaord: Dashboard;
}


