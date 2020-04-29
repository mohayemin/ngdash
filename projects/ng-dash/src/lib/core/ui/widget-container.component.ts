import { Component, Input, ChangeDetectionStrategy, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { CdkDragDrop, DragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { WidgetContainer } from '../widget-container';
import { Dashboard } from '../dashboard';
import { Widget } from '../widget';
import { WidgetWrapperComponent } from './widget-wrapper.component';

@Component({
	selector: 'ngdash-widget-container',
	template: `
  		<div class="ngdash-widget-container"
			[attr.wcid]="container.uniqueId"
			cdkDropList
  			#dropList="cdkDropList"
  			[cdkDropListData]="this"
			(cdkDropListDropped)="dropped($event)">
			<ng-template #containerRef></ng-template>
  		</div>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetContainerComponent {
	@Input() container!: WidgetContainer;
	@Input() dashboard?: Dashboard;

	@ViewChild("dropList", { read: CdkDropList }) dropList: CdkDropList;
	@ViewChild("containerRef", { read: ViewContainerRef }) widgetsVCR: ViewContainerRef;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver) {
	}

	ngAfterViewInit() {
		this.container.widgets.forEach(w => this.renderWidgetWrapper(w));
	}

	dropped(event: CdkDragDrop<WidgetContainerComponent>) {
		if (event.container === event.previousContainer) {
			this.sortWidget(event);
		} else {
			this.transferWidget(event);
		}
	}

	private sortWidget(event: CdkDragDrop<WidgetContainerComponent>) {
		const wrapperComp = event.item.data as WidgetWrapperComponent;
		this.container.sortWidget(wrapperComp.widget, event.currentIndex);
		const wrapperVR = this.widgetsVCR.detach(event.previousIndex);
		this.widgetsVCR.insert(wrapperVR, event.currentIndex);
	}

	private transferWidget(event: CdkDragDrop<WidgetContainerComponent>) {
		const wrapperComp = event.item.data as WidgetWrapperComponent;
		const oldContainerComp = event.previousContainer.data;
		const newContainerComp = event.container.data;

		this.dashboard.transferWidget(wrapperComp.widget, newContainerComp.container, event.currentIndex);
		const wrapperVR = oldContainerComp.widgetsVCR.detach(event.previousIndex);
		this.widgetsVCR.insert(wrapperVR, event.currentIndex);
		
		oldContainerComp.dropList.removeItem(event.item);
		newContainerComp.dropList.addItem(event.item);
		
		wrapperComp.container = this.container;
		wrapperComp.widgetComponent.container = this.container;
	}

	private renderWidgetWrapper(widget: Widget) {
		const factory = this.componentFactoryResolver.resolveComponentFactory(WidgetWrapperComponent);
		const wrapperCompRef = this.widgetsVCR.createComponent(factory);
		const widgetComp = wrapperCompRef.instance;
		widgetComp.widget = widget;
		widgetComp.dashboard = this.dashboard;
		widgetComp.container = this.container;

		wrapperCompRef.changeDetectorRef.detectChanges();
	}
}
