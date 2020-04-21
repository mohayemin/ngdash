import { Widget } from '../widget/widget';
import { LayoutComponent } from '../layout/layout.component';
import { Type } from '@angular/core';

export class Dashboard {
  constructor(
    public widgets: Widget[],
    public layout: Type<LayoutComponent>,
    public config: any
  ) {
  }
}
