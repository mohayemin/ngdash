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
import { NgDashWidget } from '../registry/widget.decorator';

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
	@Input() widget: Widget;

	@ViewChild("widget", { read: ViewContainerRef }) widgetVCR: ViewContainerRef;
	@ViewChild("header", { read: ViewContainerRef }) headerVCR: ViewContainerRef;
	@ViewChild("body", { read: ViewContainerRef }) bodyVCR: ViewContainerRef;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	ngAfterViewInit() {
		const widgetComponent = NgDashWidget.resolve(this.widget.ui.widgetId);
		this.renderComponent(widgetComponent, this.widgetVCR);
	}

	private renderComponent(
		compType: Type<any>,
		vcr: ViewContainerRef) {

		const factory = this.componentFactoryResolver.resolveComponentFactory(compType);
		const component = vcr.createComponent(factory);
		component.instance.widget = this.widget;
		component.changeDetectorRef.detectChanges();
	}
}
