import { Component, Input, AfterViewInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NgDashComponent } from '../../ng-dash.component';
import { Widget } from '../../widget/widget';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

const selector = 'ngdash-widget-container';
@Component({
  selector: selector,
  template: `
    <div class="${selector}"
        cdkDropList
        [cdkDropListData]="widgets"
        (cdkDropListDropped)="drop($event)">
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
  @Input() cid: number;
  widgets: Widget[];

  constructor(
    private ngDash: NgDashComponent,
  ) {
  }

  ngOnInit() {
    let widgets = this.ngDash.dashboard.widgets
      .filter(w => w.containerId === this.cid);
    widgets.sort((w1, w2) => w1.order - w2.order);
    this.widgets = widgets;
  }

  drop(event: CdkDragDrop<Widget[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
    this.widgets.forEach((widget, index) => widget.order = index);
  }
}
