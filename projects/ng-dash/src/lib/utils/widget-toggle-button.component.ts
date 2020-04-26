import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../core/widget';

@Component({
	selector: 'ngdash-widget-toggle-button',
	template: `
		<button type="button"
			[hidden]="widget.state.isCollapsed"
			title="Collapse widget" 
			class="btn btn-light"
			(click)="click()">
			<i class="fas fa-minus"></i>
		</button>
		<button type="button"
			[hidden]="!widget.state.isCollapsed"
			title="Expand widget"
			class="btn btn-light"
			(click)="click()">
			<i class="fas fa-plus"></i>
		</button>
  	`,
	styles: [
	]
})
export class WidgetToggleButtonComponent {
	@Input() widget: Widget;

	click() {
		this.widget.toggle();
	}
}
