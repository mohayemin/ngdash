import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { WidgetComponent } from '../../widget/widget.component';

@Component({
  selector: 'ngdash-text-widget',
  template: `
    {{widget.config.text}}
  `,
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextWidgetComponent extends WidgetComponent {

}
