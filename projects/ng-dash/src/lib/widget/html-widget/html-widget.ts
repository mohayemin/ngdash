import { Widget } from '../widget';
import { HtmlWidgetComponent } from './html-widget.component';
import { Observable, of } from 'rxjs';

export class HtmlWidget extends Widget {
  get componentType() {
    return HtmlWidgetComponent;
  }
  protected loadData(): Observable<any> {
    return of();
  }
}
