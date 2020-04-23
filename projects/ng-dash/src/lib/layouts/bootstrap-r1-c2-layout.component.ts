import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgDashLayout } from '../core/registry/ng-dash-layout.decorator';

@Component({
	selector: 'ngdash-bootstrap-r1-c2-layout',
	template: `
    <div class="row">
      <div class="col-sm">
        <ngdash-widget-container [cid]="0"></ngdash-widget-container>
      </div>
      <div class="col-sm">
        <ngdash-widget-container [cid]="1"></ngdash-widget-container>
      </div>
    </div>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@NgDashLayout(BootstrapR1C2LayoutComponent.lid)
export class BootstrapR1C2LayoutComponent {
	static lid = "ngdash-bootstrap-r1-c2-layout";
}
