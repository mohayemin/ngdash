import { Component, Input, AfterViewInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
import { Widget } from '../core/widget';
import { Dashboard } from '../core/dashboard';
import { WidgetContainer } from '../core/widget-container';
import { Id } from '../utils/types';
import { NgDashResolver, BindingCategory } from '../core/ng-dash-resolver';

@Component({
	selector: 'ngdash-bootstrap-card-widget',
	template: `
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">
				<ng-template #header></ng-template>
			</h5>
			<div class="card-text"
				[hidden]="widget.state['isCollapsed']">
				<ng-template #body></ng-template>
			</div>
		</div>
	</div>
	`,
	styles: [
	]
})
export class BootstrapCardWidgetComponent implements AfterViewInit {
	@Input() widget: Widget;
	@Input() container: WidgetContainer;
	@Input() dashboard: Dashboard;

	@ViewChild('header', { read: ViewContainerRef })
	headerContainerRef: ViewContainerRef;

	@ViewChild('body', { read: ViewContainerRef })
	bodyContainerRef: ViewContainerRef

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private resolver: NgDashResolver
	) {
	}

	ngAfterViewInit() {
		this.createComponent(this.headerContainerRef, 'widget-header', this.widget.ui.headerComponentId);
		this.createComponent(this.bodyContainerRef, 'widget-body', this.widget.ui.bodyComponentId);
	}

	private createComponent(vcr: ViewContainerRef, bindingcategory: BindingCategory, componentId: Id) {
		const componentType = this.resolver.resolve(bindingcategory, componentId);
		const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
		const compRef = vcr.createComponent(factory);
		const comp = compRef.instance;
		comp.widget = this.widget;
		comp.container = this.container;
		comp.dashboard = this.dashboard;

		compRef.changeDetectorRef.detectChanges();
	}
}
