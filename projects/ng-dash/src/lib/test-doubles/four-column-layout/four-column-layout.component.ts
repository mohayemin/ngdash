import {
	Component,
	ChangeDetectionStrategy
} from '@angular/core';
import { NgDashLayout } from '../../core/registry/ng-dash-layout.decorator';

@Component({
	selector: 'ngdash-four-column-layout',
	template: `
    <div>Four Columns</div>
    <ngdash-widget-container [cid]="0" class="c4"></ngdash-widget-container>
    <ngdash-widget-container [cid]="1" class="c1"></ngdash-widget-container>
    <ngdash-widget-container [cid]="2" class="c2"></ngdash-widget-container>
    <ngdash-widget-container [cid]="3" class="c3"></ngdash-widget-container>
  `,
	changeDetection: ChangeDetectionStrategy.OnPush
})
@NgDashLayout(FourColumnLayoutComponent.lid)
export class FourColumnLayoutComponent {
	public static lid = "ngdash-four-column-layout";
}
