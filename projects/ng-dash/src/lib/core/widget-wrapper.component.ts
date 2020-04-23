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
import { Widget } from './widget';

@Component({
	selector: 'ngdash-widget-wrapper',
	template: `
    <div class="ngdash-widget-wrapper">
      <ng-template #header></ng-template>
      <ng-template #body></ng-template>
    <div>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetWrapperComponent implements AfterViewInit {
	@Input() widget: Widget;
	@ViewChild("header", { read: ViewContainerRef }) headerVCR: ViewContainerRef;
	@ViewChild("body", { read: ViewContainerRef }) bodyVCR: ViewContainerRef;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver
	) { }

	ngAfterViewInit() {
		this.renderHeader();
		this.renderBody();
	}

	renderHeader() {
		this.renderComponent(this.widget.headerComponent, this.headerVCR);
	}

	renderBody() {
		this.renderComponent(this.widget.bodyComponent, this.bodyVCR);
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
