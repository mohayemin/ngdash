import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../layout.component';

@Component({
  selector: 'ngdash-single-column-layout',
  template: `
    <ngdash-widget-container [cid]="0">
    </ngdash-widget-container>
  `,
  styles: [
  ]
})
export class SingleColumnLayoutComponent extends LayoutComponent {

}
