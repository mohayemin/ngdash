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
      .filter(w => w.position.containerId === this.cid);
    widgets.sort((w1, w2) => w1.position.index - w2.position.index);
    widgets.forEach((w, i) => w.position.index = i);
    this.widgets = widgets;
  }

  drop(event: CdkDragDrop<WidgetContainerComponent>) {
    const oldContainer = event.previousContainer.data;
    const newContainer = event.container.data;
    const widget = event.item.data as Widget;

    widget.position.index = event.currentIndex - 0.1;
    widget.position.containerId = newContainer.cid;
    oldContainer.setupWidgets();
    if (newContainer !== oldContainer) {
      newContainer.setupWidgets();
    }
  }
}
