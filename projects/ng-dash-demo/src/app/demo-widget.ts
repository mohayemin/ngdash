import { Type } from '@angular/core';
import { WidgetComponent } from 'projects/ng-dash/src/lib/widget/widget.component';
import { Widget } from 'projects/ng-dash/src/public-api';
import { DemoWidgetComponent } from './demo-widget.component';

export class DemoWidget extends Widget {
  get componentType(): Type<WidgetComponent> {
    return DemoWidgetComponent;
  }
}
