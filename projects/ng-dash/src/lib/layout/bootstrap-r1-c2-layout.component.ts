import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgDashLayout } from '../core/registry/layout.decorator';
import { Dashboard } from '../core/dashboard';

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
@NgDashLayout('ngdash-bootstrap-r1-c2-layout')
export class BootstrapR1C2LayoutComponent {
	@Input() dashboard: Dashboard;
}
