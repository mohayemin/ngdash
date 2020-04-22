import { Component, Input, AfterViewInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NgDashComponent } from '../../ng-dash.component';
import { Widget } from '../../widget/widget';

const selector = 'ngdash-widget-container';
@Component({
  selector: selector,
  template: `
    <div class="${selector}" >
      <div cdkDrag
        *ngFor="let widget of widgets">
          <ngdash-widget-wrapper [widget]="widget">
          </ngdash-widget-wrapper>
      </div>
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
