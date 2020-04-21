import { Observable, Subject } from 'rxjs';
import { Type } from '@angular/core';
import { WidgetComponent } from './widget.component';

export abstract class Widget {
  constructor(
    public readonly containerId: string,
    public readonly order: number,
    public readonly config: any,
  ){
  }

  abstract get componentType(): Type<WidgetComponent>;
}

