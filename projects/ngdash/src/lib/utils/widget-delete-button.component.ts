import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../core/widget';

@Component({
	selector: 'ngdash-widget-delete-button',
	template: `
    <button type="button"
		title="Remove widget"
		class="btn btn-light"
		(click)="click()">
		<i class="far fa-trash-alt"></i>
	</button>
  `,
	styles: [
	]
})
export class WidgetDeleteButtonComponent {
	@Input() widget: Widget;
	
	constructor() { }

	click() {
		this.widget.remove();
	}
}
