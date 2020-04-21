import { Widget } from '../lib/widget/widget';
import { Type } from '@angular/core';
import { WidgetComponent } from '../lib/widget/widget.component';
import { TextWidgetComponent } from './text-widget/text-widget.component';

export class TextWidget extends Widget {
  get componentType(): Type<WidgetComponent> {
    return TextWidgetComponent;
  }

  loadData(): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }

}
