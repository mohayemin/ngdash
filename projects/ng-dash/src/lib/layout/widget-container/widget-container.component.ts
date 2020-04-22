import { Component, Input, AfterViewInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NgDashComponent } from '../../ng-dash.component';
import { Widget } from '../../widget/widget';

const selector = 'ngdash-widget-container';
@Component({
  selector: selector,
  template: `
    <div class="${selector}" >
      <ngdash-widget-wrapper
        *ngFor="let widget of widgets"
        [widget]="widget"
        cdkDrag>
      </ngdash-widget-wrapper>
    </div>
  `,
  styles: [
  ]
})
export class WidgetContainerComponent {
  @Input() containerId: string;
  widgets: Widget[];

  constructor(
    private ngDash: NgDashComponent,
  ) {
  }

  ngOnInit() {
    let widgets = this.ngDash.dashboard.widgets
      .filter(w => w.containerId === this.containerId);
    widgets.sort((w1, w2) => w1.order - w2.order);
    this.widgets = widgets;
  }
}
