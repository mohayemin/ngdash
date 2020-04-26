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
    <div class="ngdash-widget-wrapper">
		<ng-template #widget></ng-template>
    <div>
  	`,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetWrapperComponent implements AfterViewInit {
	@Input() widget!: Widget;
	@Input() container?: WidgetContainer;
	@Input() dashboard?: Dashboard;

	@ViewChild("widget", { read: ViewContainerRef }) widgetVCR: ViewContainerRef;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	ngAfterViewInit() {
		const widgetComponent = NgDashComponent.resolve('widget', this.widget.ui.widgetId);
		this.renderComponent(widgetComponent, this.widgetVCR);
	}

	private renderComponent(
		compType: Type<any>,
		vcr: ViewContainerRef) {

		const factory = this.componentFactoryResolver.resolveComponentFactory(compType);
		const widgetCompRef = vcr.createComponent(factory);
		const widgetComp = widgetCompRef.instance;
		widgetComp.widget = this.widget;
		widgetComp.container = this.container;
		widgetComp.dashboard = this.dashboard;
		
		widgetCompRef.changeDetectorRef.detectChanges();
	}
}
