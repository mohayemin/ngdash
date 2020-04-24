import {
	Component,
	AfterViewInit,
	Input,
	ViewChild,
	ComponentFactoryResolver,
	ViewContainerRef,
	ChangeDetectionStrategy,
	Output,
	EventEmitter,
} from '@angular/core';
import { Dashboard } from '../dashboard';
import { WidgetMoveEvent } from '../widget-move-event';
import { Widget } from '../widget';

@Component({
	selector: 'ngdash',
	template: `
    <div class="ngdash"
      [class.dragdrop-enabled]="enableDragDrop"
      cdkDropListGroup
      [cdkDropListGroupDisabled]="!enableDragDrop">
      <ng-template #layout></ng-template>
    </div>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgDashComponent implements AfterViewInit {
	@Input() dashboard: Dashboard;
	@Input() enableDragDrop: boolean;

	@Output("moveWidget") widgetMoveEmitter = new EventEmitter<WidgetMoveEvent>();
	@Output("removeWidget") widgetRemoveEmitter = new EventEmitter<Widget>()

	@ViewChild("layout", { read: ViewContainerRef })
	layoutContainerRef: ViewContainerRef;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	ngAfterViewInit(): void {
		this.renderLayout();
	}

	renderLayout() {
		const layoutFactory = this.componentFactoryResolver.resolveComponentFactory(this.dashboard.layoutComponent);
		const layoutRef = this.layoutContainerRef.createComponent(layoutFactory);
		layoutRef.instance['dashboard'] = this.dashboard;
		layoutRef.changeDetectorRef.detectChanges();
	}
}
