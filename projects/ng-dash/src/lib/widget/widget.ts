import { Observable, Subject } from 'rxjs';
import { Type } from '@angular/core';
import { WidgetComponent } from './widget.component';

export class Widget {
  readonly initialPosition: WidgetPosition;

  constructor(
    public position: WidgetPosition,
    public config: any,
    public componentType: Type<WidgetComponent>
  ) {
    this.initialPosition = {
      containerId: position.containerId,
      index: position.index
    };
  }
}

interface WidgetPosition {
  containerId: number;
  index: number;
}
