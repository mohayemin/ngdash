import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  selector: 'ngdash-html-widget',
  template: `
    <div [innerHtml]="widget.config.html">
    </div>
  `,
  styles: [
  ]
})
export class HtmlWidgetComponent extends WidgetComponent {

}
