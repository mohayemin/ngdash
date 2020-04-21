import { Directive, Input, Inject, OnInit, ComponentFactoryResolver, ViewContainerRef, AfterViewInit } from '@angular/core';
import { NgDashComponent } from '../ng-dash.component';
import { Dashboard } from '../dashboard/dashboard';
import { Widget } from '../widget/widget';

@Directive({
  selector: '[widgetContainer]'
})
export class WidgetContainerDirective implements AfterViewInit {
  @Input('widgetContainer') id: string;

  constructor(
    private ngDash: NgDashComponent,
    private componentFactoryResolver: ComponentFactoryResolver,
    public viewContainerRef: ViewContainerRef
  ) {
  }

  ngAfterViewInit() {
    let widgets = this.ngDash.dashboard.widgets.filter(w => w.containerId == this.id);
    widgets.forEach(widget => this.renderWidget(widget));
  }

  renderWidget(widget: Widget) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(widget.componentType);
    const component = this.viewContainerRef.createComponent(factory);
    component.instance.widget = widget;
    component.changeDetectorRef.detectChanges();
  }
}
