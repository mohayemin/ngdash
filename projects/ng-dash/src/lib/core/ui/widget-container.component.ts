import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { WidgetContainer } from '../widget-container';

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
  						<ngdash-widget-wrapper [widget]="widget"></ngdash-widget-wrapper>
  				</div>
  		</div>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetContainerComponent {
	@Input() container: WidgetContainer;

	dropped(event: CdkDragDrop<WidgetContainer, WidgetContainer>) {
		if (event.previousContainer === event.container)
			this.container.moveWidget(event.item.data, event.currentIndex);
		else
			this.container.acquireWidget(event.item.data, event.currentIndex, event.previousContainer.data);
	}
}
