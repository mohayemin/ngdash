import {
	Component,
	ChangeDetectionStrategy,
	Input
} from '@angular/core';
import { Widget } from '../../core/widget';
import { NgDashWidget } from '../../core/registry/widget.decorator';

@Component({
	selector: 'ngdash-text-widget',
	template: `
    {{widget.config.text}}
  `,
	styleUrls: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@NgDashWidget('ngdash-text-widget')
export class TextWidgetComponent {
	@Input() widget: Widget;
}
