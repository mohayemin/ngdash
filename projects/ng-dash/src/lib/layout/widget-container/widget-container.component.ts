import { Component, Input, AfterViewInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NgDashComponent } from '../../ng-dash.component';
import { Widget } from '../../widget/widget';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

const selector = 'ngdash-widget-container';
@Component({
  selector: selector,
  template: `
    <div class="${selector}"
        [attr.cid]="cid"
        cdkDropList
        [cdkDropListData]="this"
        (cdkDropListDropped)="drop($event)">
      <div cdkDrag
        [cdkDragData]="widget"
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
  @Input() cid: number;
  widgets: Widget[];

  constructor(
    private ngDash: NgDashComponent,
  ) {
  }

  ngOnInit() {
    this.setupWidgets();
  }

  setupWidgets() {
    let widgets = this.ngDash.dashboard.widgets
      .filter(w => w.containerId === this.cid);
    widgets.sort((w1, w2) => w1.order - w2.order);
    widgets.forEach((w, i) => w.order = i);
    this.widgets = widgets;
  }

  drop(event: CdkDragDrop<WidgetContainerComponent>) {
    const oldContainer = event.previousContainer.data;
    const newContainer = event.container.data;
    const widget = event.item.data as Widget;

    widget.order = event.currentIndex - 0.1;
    widget.containerId = newContainer.cid;
    oldContainer.setupWidgets();
    if (newContainer !== oldContainer) {
      newContainer.setupWidgets();
    }
  }
}
