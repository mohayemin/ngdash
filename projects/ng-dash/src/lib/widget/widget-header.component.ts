import { Input } from '@angular/core';
import { Widget } from './widget';
import { WidgetContainerComponent } from '../layout/widget-container/widget-container.component';

export abstract class WidgetHeaderComponent {
  @Input() widget: Widget;

  constructor(private widgetContainer: WidgetContainerComponent){}

  removeWidget() {
    this.widgetContainer.removeWidget(this.widget);
  }
}
