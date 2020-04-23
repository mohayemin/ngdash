import { Component } from '@angular/core';
import { NgDashWidgetHeader } from './registry/ng-dash-widget-header.decorator';

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
@NgDashWidgetHeader('default')
export class DefaultWidgetHeaderComponent {
	removeWidget(){
	}
}
