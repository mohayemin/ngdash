import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Widget } from '../core/widget';
import { WidgetContainer } from '../core/widget-container';
import { Dashboard } from '../core/dashboard';

@Component({
	selector: 'ngdash-widget-header-button-set',
	template: `
		<div class="widget-header-button-set">
			<ngdash-widget-toggle-button [widget]="widget"></ngdash-widget-toggle-button>
			<ngdash-widget-delete-button [widget]="widget"></ngdash-widget-delete-button>
		</div>	
  	`,
	styles: [
		`.widget-header-button-set { white-space: nowrap; margin-right: -.25rem; }`, 
		`.btn { padding: .1rem .25rem }`
	],
	encapsulation: ViewEncapsulation.None
})
export class WidgetHeaderButtonSetComponent implements OnInit {
	@Input() widget!: Widget;
	@Input() container? : WidgetContainer;
	@Input() dashboard?: Dashboard;

	constructor() { }

	ngOnInit(): void {
	}

}
