import { Component, ChangeDetectionStrategy } from '@angular/core';
import { WidgetBodyComponent } from '../core/widget-body.component';

@Component({
	selector: 'ngdash-html-widget',
	template: `
    <div [innerHtml]="widget.config.html">
    </div>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlWidgetComponent extends WidgetBodyComponent {

}
