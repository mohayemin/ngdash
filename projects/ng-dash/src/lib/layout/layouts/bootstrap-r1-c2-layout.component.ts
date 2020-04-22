import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../layout.component';

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
  styles: [
  ]
})
export class BootstrapR1C2LayoutComponent extends LayoutComponent {
}
