import { Component, OnInit } from '@angular/core';
import { WidgetHeaderComponent } from '../../widget/widget-header.component';

@Component({
	selector: 'ngdash-default-widget-header',
	template: `
    <div class="ngdash-default-widget-header py-1">
      <div class="btn-group btn-group-sm" role="group">
        <button type="button" class="btn btn-secondary" (click)="removeWidget()">&times;</button>
      </div>
    </div>
  `,
	styles: [
		`.ngdash-default-widget-header { display: flex; }`,
		`.btn-group { margin-left: auto; }`
	]
})
export class DefaultWidgetHeaderComponent extends WidgetHeaderComponent {
}
