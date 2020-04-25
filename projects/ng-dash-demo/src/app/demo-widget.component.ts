import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Widget, Dashboard } from 'projects/ng-dash/src/public-api';
import { NgDashComponent } from 'projects/ng-dash/src/lib/core/ng-dash-component.decorator';

@Component({
	selector: 'ng-dash-demo-widget',
	template: `
    <div [attr.initcontainer]="widget.initialState.containerId">
		<h5>{{widget.config.title}}</h5>
		<div>
			The entire widget is custom. Not using the default bootstrap card widget.
			Drag it around, the position values below will be updated accordingly
		</div>
		<div><b>Current: {{widget.state | json}}</b></div>
      	<div>Initial: {{widget.initialState | json}}</div>
    </div>
  `,
	styles: [
		`:host {font-family: monospace}`,
		`[initcontainer='0'] { background-color: lightpink}`,
		`[initcontainer='1'] { background-color: lightblue}`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@NgDashComponent('widget', 'demo')
export class DemoWidgetComponent {
	@Input() widget: Widget;
	@Input() dashbaord: Dashboard;
}


