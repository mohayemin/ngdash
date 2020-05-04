import {
	Component,
	AfterViewInit,
	Input,
	ViewChild,
	ComponentFactoryResolver,
	ViewContainerRef,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	OnInit,
	ChangeDetectorRef,
} from '@angular/core';
import { Dashboard } from '../dashboard';
import { NgdashResolver } from '../ngdash-resolver';

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
	styleUrls: [
		'./ngdash.component.scss'
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class Ngdash implements AfterViewInit, OnInit {
	@Input() dashboard: Dashboard;
	enableDragDrop: boolean;

	@ViewChild("layout", { read: ViewContainerRef })
	layoutContainerRef: ViewContainerRef;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private cdr: ChangeDetectorRef,
		private resolver: NgdashResolver
	) { }

	ngAfterViewInit(): void {
		this.renderLayout();
	}

	ngOnInit(): void {
		this.dashboard.events.optionChange.subscribe((event)=> {
			this.enableDragDrop = event.currentOptions['isDragEnabled'];
			this.cdr.detectChanges();
		});
	}

	renderLayout() {
		const layoutType = this.resolver.resolve('layout', this.dashboard.getLayoutId());
		const layoutFactory = this.componentFactoryResolver.resolveComponentFactory(layoutType);
		const layoutRef = this.layoutContainerRef.createComponent(layoutFactory);
		layoutRef.instance['dashboard'] = this.dashboard;
		layoutRef.changeDetectorRef.detectChanges();
	}
}
