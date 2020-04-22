import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from 'projects/ng-dash/src/lib/widget/widget.component';

@Component({
  selector: 'ng-dash-demo-demo-widget',
  template: `
    <div>
      <span>{{widget.order}}&nbsp;</span>
      <span>{{widget.config.html}}</span>
    </div>
  `,
  styles: [
  ]
})
export class DemoWidgetComponent extends WidgetComponent {

}


