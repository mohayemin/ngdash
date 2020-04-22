import { Input } from '@angular/core';
import { Widget } from './widget';

export abstract class WidgetBodyComponent {
  @Input() widget: Widget;
}
