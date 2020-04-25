import { Component, Input, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { Widget } from '../core/widget';
import { Dashboard } from '../core/dashboard';
import { WidgetContainer } from '../core/widget-container';
import { NgDashComponent } from '../core/ng-dash-component.decorator';

@Component({
	selector: 'ngdash-bootstrap-card-widget-header',
	template: `
		<div class="card-header">
			<ng-container #customWrapper></ng-container>
			<div class="d-flex align-items-center" #defaultWrapper>
				<div class="title" 
					[innerHtml]="widget.config.title">
				</div>
				<div class="btn-group-sm">
					<button type="button"
						[hidden]="widget.state['isCollapsed']"
						title="Collapse widget" 
						class="btn btn-light"
						(click)="widget.state['isCollapsed']=true">
						<i class="fas fa-minus"></i>
					</button>
					<button type="button"
						[hidden]="!widget.state['isCollapsed']"
						title="Expand widget"
						class="btn btn-light"
						(click)="widget.state['isCollapsed']=false">
						<i class="fas fa-plus"></i>
					</button>
					<button type="button"
						title="Remove widget"
						class="btn btn-light"
						(click)="remove()">
						<i class="far fa-trash-alt"></i>
					</button>
				</div>
			</div>
		</div>
  	`,
	styles: [
		`.title { flex-grow : 1; }`,
	]
})
export class BootstrapCardWidgetHeaderComponent implements AfterViewInit {
	@ViewChild('customWrapper', { read: ViewContainerRef })
	customWrapperRef: ViewContainerRef
	@ViewChild('defaultWrapper')
	defaultElementRef: ElementRef

	@Input() widget: Widget;
	@Input() container: WidgetContainer;
	@Input() dashboard: Dashboard;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) {

	}

	remove() {
		this.container.removeWidget(this.widget);
	}

	ngAfterViewInit() {
		if (this.widget.config.headerId) {
			this.defaultElementRef.nativeElement.remove();

			this.customWrapperRef.clear();
			let headerCompType = NgDashComponent.resolve('widget-header', this.widget.config.headerId);

			const factory = this.componentFactoryResolver.resolveComponentFactory(headerCompType);
			const headerRef = this.customWrapperRef.createComponent(factory);
			const headerComp = headerRef.instance;
			headerComp.widget = this.widget;
			headerComp.container = this.container;
			headerComp.dashboard = this.dashboard;

			headerRef.changeDetectorRef.detectChanges();
		}
	}
}
