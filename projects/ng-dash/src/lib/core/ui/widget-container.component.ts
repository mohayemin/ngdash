import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { WidgetContainer } from '../widget-container';
import { Dashboard } from '../dashboard';
import { Widget } from '../widget';

@Component({
	selector: 'ngdash-widget-container',
	template: `
  		<div class="ngdash-widget-container"
  			[attr.cid]="container.id"
  			cdkDropList
  			[cdkDropListData]="container"
			(cdkDropListDropped)="dropped($event)">
  				<div cdkDrag
  					[cdkDragData]="widget"
  					*ngFor="let widget of container.widgets">
  						<ngdash-widget-wrapper [widget]="widget" [container]="container"></ngdash-widget-wrapper>
  				</div>
  		</div>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetContainerComponent {
	@Input() container!: WidgetContainer;
	@Input() dashboard?: Dashboard;

	dropped(event: CdkDragDrop<WidgetContainer, WidgetContainer>) {
		const widget = event.item.data as Widget;
		widget.move(this.container.id, event.currentIndex);
	}
}
