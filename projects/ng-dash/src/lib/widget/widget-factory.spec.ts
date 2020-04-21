import { WidgetFactory } from './widget-factory';
import { of, Observable } from 'rxjs';
import { Widget } from './widget';

describe('WidgetFactory', () => {
  it('should create an instance', () => {
    expect(new WidgetFactory()).toBeTruthy();
  });

  it('should be able to resolve a registered widget', ()=>{
    let factory = new WidgetFactory();
    factory.bind("dummy", DummyWidget);
    expect(factory.create("dummy")).toBeInstanceOf(DummyWidget);
  });
});

class DummyWidget extends Widget {
  loadData(): Observable<any> {
    return of(1);
  }
}
