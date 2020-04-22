import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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

  private setupWidgets() {
    let widgets = this.ngDash.dashboard.widgets
      .filter(w => w.position.containerId === this.cid);
    widgets.sort((w1, w2) => w1.position.index - w2.position.index);
    widgets.forEach((w, i) => w.position.index = i);
    this.widgets = widgets;
  }

  private moveWidget(widget: Widget, newIndex: number) {
    let oldIndex = widget.position.index;
    if (oldIndex === newIndex)
      return;

    widget.position.index = newIndex - 0.1;
    this.setupWidgets();
  }

  private transferWidget(widget: Widget, toIndex: number, sourceContainer: WidgetContainerComponent) {
    widget.position.containerId = this.cid;
    widget.position.index = toIndex - 0.1;
    this.setupWidgets();
    sourceContainer.setupWidgets();
  }

  drop(event: CdkDragDrop<WidgetContainerComponent>) {
    if (this === event.previousContainer.data) {
      this.moveWidget(event.item.data, event.currentIndex);
    } else {
      this.transferWidget(event.item.data, event.currentIndex, event.previousContainer.data);
    }
  }
}
