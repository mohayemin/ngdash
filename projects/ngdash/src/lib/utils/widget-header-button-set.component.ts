import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../core/widget';
import { WidgetContainer } from '../core/widget-container';
import { Dashboard } from '../core/dashboard';

@Component({
	selector: 'ngdash-widget-header-button-set',
	template: `
		<div class="btn-group-sm widget-header-button-set">
			<ngdash-widget-toggle-button [widget]="widget"></ngdash-widget-toggle-button>
			<ngdash-widget-delete-button [widget]="widget"></ngdash-widget-delete-button>
		</div>	
  `,
	styles: [
	]
})
export class WidgetHeaderButtonSetComponent implements OnInit {
	@Input() widget!: Widget;
	@Input() container? : WidgetContainer;
	@Input() dashboard?: Dashboard;

	constructor() { }

	ngOnInit(): void {
	}

}
