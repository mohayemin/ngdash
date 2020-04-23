import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgDashLayout } from '../core/registry/ng-dash-layout.decorator';

@Component({
	selector: 'ngdash-single-column-layout',
	template: `
    <ngdash-widget-container [cid]="0">
    </ngdash-widget-container>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@NgDashLayout("ngdash-bootstrap-r1-c2-layout")
export class SingleColumnLayoutComponent {

}
