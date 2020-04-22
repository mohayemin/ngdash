import { Observable, Subject } from 'rxjs';
import { Type } from '@angular/core';
import { WidgetComponent } from './widget.component';

export class Widget {
  constructor(
    public containerId: string,
    public order: number,
    public config: any,
    public componentType: Type<WidgetComponent>
  ){
  }
}

