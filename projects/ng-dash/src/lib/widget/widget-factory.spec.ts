import { WidgetFactory } from './widget-factory';
import { of, Observable } from 'rxjs';
import { Widget } from './widget';
import { TextWidget } from '../../test-doubles/text-widget';

describe('WidgetFactory', () => {
  it('should be able to resolve a registered widget', () => {
    let factory = new WidgetFactory();
    factory.bind("text", TextWidget);
    expect(factory.createModel({ type: "text", containerId: "", order: 1, config: {} })).toBeInstanceOf(TextWidget);
  });
});

