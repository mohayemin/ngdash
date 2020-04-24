import {
	Component,
	ChangeDetectionStrategy,
	Input
} from '@angular/core';
import { Widget } from '../../core/widget';

@Component({
	selector: 'ngdash-text-widget',
	template: `
    {{widget.config.text}}
  `,
	styleUrls: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextWidgetComponent {
	@Input() widget: Widget;
}
