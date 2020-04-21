import { Input } from '@angular/core';
import { Widget } from './widget';

export abstract class WidgetComponent {
  @Input() widget: Widget;
}
