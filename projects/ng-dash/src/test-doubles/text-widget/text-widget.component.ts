import { Component, OnInit } from '@angular/core';
import { WidgetComponent } from '../../lib/widget/widget.component';

@Component({
  selector: 'ngdash-text-widget',
  template: `
    {{widget.config.text}}
  `,
  styleUrls: []
})
export class TextWidgetComponent extends WidgetComponent {

}
