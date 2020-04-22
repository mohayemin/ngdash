import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WidgetBodyComponent } from 'projects/ng-dash/src/lib/widget/widget-body.component';

@Component({
  selector: 'ng-dash-demo-widget',
  template: `
    <div [attr.initcontainer]="widget.initialPosition.containerId">
      <div>Initial: {{widget.initialPosition | json}}</div>
      <div>Current: {{widget.position | json}}</div>
    </div>
  `,
  styles: [
    `:host {font-family: monospace}`,
    `[initcontainer='0'] { background-color: lightpink}`,
    `[initcontainer='1'] { background-color: lightblue}`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoWidgetComponent extends WidgetBodyComponent {

  ngOnInit() {
  }
}


