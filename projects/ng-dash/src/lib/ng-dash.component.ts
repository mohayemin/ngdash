import { Component, AfterViewInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Dashboard } from './dashboard/dashboard';
import { DashboardData } from './dashboard/dashboard-data';
import { DashboardFactory } from './dashboard/dashboard-factory';
import { WidgetFactory } from './widget/widget-factory';

@Component({
  selector: 'ngdash-ng-dash',
  template: `
    <div #layout></div>
  `,
  styles: [
  ]
})
export class NgDashComponent implements AfterViewInit {
  @Input("data") data: DashboardData;
  dashboard: Dashboard;

  @ViewChild("layout", { read: ViewContainerRef }) layoutContainerRef: ViewContainerRef;

  constructor(
    private dashboardFactory: DashboardFactory,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit(): void {
    this.dashboard = this.dashboardFactory.createFromData(this.data);
    this.dashboard.widgets.forEach(widget => {
      const factory = this.componentFactoryResolver.resolveComponentFactory(widget.componentType);
      const component = this.layoutContainerRef.createComponent(factory);
      component.instance.widget = widget;
      component.changeDetectorRef.detectChanges();
    });
  }
}
