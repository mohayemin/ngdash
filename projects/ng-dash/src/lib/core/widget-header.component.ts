import { Input } from '@angular/core';
import { Widget } from './widget';
import { Dashboard } from './dashboard';

export abstract class WidgetHeaderComponent {
  @Input() widget: Widget;
  @Input() dashboard: Dashboard;

  constructor() { }

  removeWidget() {
  }
}
