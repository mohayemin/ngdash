import { WidgetFactory } from './widget-factory';
import { Widget } from './widget';
import { of, Observable, from } from 'rxjs';

describe('Widget', () => {
  it('should fire event on data load', ()=>{
    let widget = new StubWidget(null, null, null, null);
    widget.on.load.subscribe(data => expect(data).toBe(1));
    widget.load();
  });
});

class StubWidget extends Widget {
  loadData(): Observable<any> {
    return of(1);
  }
}
