import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../layout.component';

@Component({
  selector: 'ngdash-single-column-layout',
  template: `
    <ng-template
      [widgetContainer]="'0'"
      [dashboard]="dashboard">
    </ng-template>
  `,
  styles: [
  ]
})
export class SingleColumnLayoutComponent extends LayoutComponent {

}
