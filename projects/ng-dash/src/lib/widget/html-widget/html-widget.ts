import { Widget } from '../widget';
import { HtmlWidgetComponent } from './html-widget.component';

export class HtmlWidget extends Widget {
  get componentType() {
    return HtmlWidgetComponent;
  }
}
