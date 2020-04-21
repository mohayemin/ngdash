import { Widget } from './widget';
import { of, Observable, from } from 'rxjs';
import { Type } from '@angular/core';
import { WidgetComponent } from './widget.component';

describe('Widget', () => {
  it('should fire event on data load', ()=>{
    let widget = new StubWidget(null, null, null);
    widget.on.load.subscribe(data => expect(data).toBe(1));
    widget.load();
  });
});

class StubWidget extends Widget {
  get componentType(): Type<WidgetComponent> {
    return null;
  }
  loadData(): Observable<any> {
    return of(1);
  }
}
