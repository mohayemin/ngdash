import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from 'projects/ng-dash/src/lib/widget/widget.component';

@Component({
  selector: 'ng-dash-demo-widget',
  template: `
    <div [attr.initcontainer]="initialContainerId">
      <div>Initial: container {{initialContainerId}}, order {{initialOrder}}</div>
      <div>Current: container {{widget.containerId}}, order {{widget.order}}</div>
    </div>
  `,
  styles: [
  ]
})
export class DemoWidgetComponent extends WidgetComponent {
  initialContainerId: number;
  initialOrder: number;

  ngOnInit() {
    this.initialContainerId = this.widget.containerId;
    this.initialOrder = this.widget.order;
  }
}


