import { Widget } from './widget';
import { Type } from '@angular/core';
import { WidgetComponent } from './widget.component';

describe('Widget', () => {

});

class StubWidget extends Widget {
  get componentType(): Type<WidgetComponent> {
    return null;
  }
}
