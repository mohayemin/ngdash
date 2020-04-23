import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Widget } from '../core/widget';

@Component({
	selector: 'ngdash-html-widget',
	template: `
    <div [innerHtml]="widget.config.html">
    </div>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlWidgetComponent {
	@Input() widget: Widget;
}
