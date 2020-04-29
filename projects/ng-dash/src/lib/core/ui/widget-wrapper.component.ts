import {
	Component,
	Input,
	ViewChild,
	ViewContainerRef,
	AfterViewInit,
	ComponentFactoryResolver,
	ChangeDetectionStrategy,
	Type
} from '@angular/core';
import { Widget } from '../widget';
import { WidgetContainer } from '../widget-container';
import { Dashboard } from '../dashboard';
import { NgDashComponent } from '../ng-dash-component.decorator';

@Component({
	selector: 'ngdash-widget-wrapper',
	template: `
	<div class="ngdash-widget-wrapper"
		cdkDrag
  		[cdkDragData]="this"
		[attr.wid]="widget.uniqueId">
		<ng-template #widgetRef></ng-template>
    <div>
  	`,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetWrapperComponent implements AfterViewInit {
	@Input() widget!: Widget;
	@Input() container?: WidgetContainer;
	@Input() dashboard?: Dashboard;

	@ViewChild("widgetRef", { read: ViewContainerRef }) widgetVCR: ViewContainerRef;

	widgetComponent: any;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	ngAfterViewInit() {
		const widgetComponent = NgDashComponent.resolve('widget', this.widget.ui.widgetComponentId);
		this.renderComponent(widgetComponent, this.widgetVCR);
	}

	private renderComponent(
		compType: Type<any>,
		vcr: ViewContainerRef) {

		const factory = this.componentFactoryResolver.resolveComponentFactory(compType);
		const widgetCompRef = vcr.createComponent(factory);
		this.widgetComponent = widgetCompRef.instance;
		this.widgetComponent.widget = this.widget;
		this.widgetComponent.container = this.container;
		this.widgetComponent.dashboard = this.dashboard;

		widgetCompRef.changeDetectorRef.detectChanges();
	}
}
