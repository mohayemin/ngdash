import {
	Component,
	ChangeDetectionStrategy,
	Input
} from '@angular/core';
import { Widget } from '../../core/widget';
import { NgDashWidgetBody } from '../../core/registry/widget-body.decorator';

@Component({
	selector: 'ngdash-text-widget',
	template: `
    {{widget.config.text}}
  `,
	styleUrls: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@NgDashWidgetBody('ngdash-text-widget')
export class TextWidgetComponent {
	@Input() widget: Widget;
}
