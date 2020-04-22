import {
  Component,
  AfterViewInit,
  Input,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { Dashboard } from './dashboard/dashboard';
import { WidgetMoveEvent } from './dashboard/widget-move-event';

@Component({
  selector: 'ngdash',
  template: `
    <div class="ngdash"
      [class.dragdrop-enabled]="enableDragDrop"
      cdkDropListGroup
      [cdkDropListGroupDisabled]="!enableDragDrop">
      <ng-template #layout></ng-template>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgDashComponent implements AfterViewInit {
  @Input() dashboard: Dashboard;
  @Input() enableDragDrop: boolean;

  @Output("moveWidget") widgetMoveEmitter = new EventEmitter<WidgetMoveEvent>();

  @ViewChild("layout", { read: ViewContainerRef })
  layoutContainerRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit(): void {
    this.renderLayout();
  }

  renderLayout() {
    const layoutFactory = this.componentFactoryResolver.resolveComponentFactory(this.dashboard.layout);
    const layoutComponent = this.layoutContainerRef.createComponent(layoutFactory);
    layoutComponent.changeDetectorRef.detectChanges();
  }
}
