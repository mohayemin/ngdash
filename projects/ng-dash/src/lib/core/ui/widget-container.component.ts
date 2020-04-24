import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, CdkDragSortEvent } from '@angular/cdk/drag-drop';
import { WidgetContainer } from '../widget-container';
import { Widget } from '../widget';

@Component({
	selector: 'ngdash-widget-container',
	template: `
  		<div class="ngdash-widget-container"
  			[attr.cid]="container.id"
  			cdkDropList
  			[cdkDropListData]="container"
  			(cdkDropListSorted)="sort($event)">
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

	sort(event: CdkDragSortEvent<WidgetContainer, Widget>) {
		this.container.moveWidget(event.item.data, event.currentIndex);
	}
}
