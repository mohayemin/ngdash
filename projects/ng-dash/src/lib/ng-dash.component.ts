import { Component, AfterViewInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Dashboard } from './dashboard/dashboard';
import { DashboardData } from './dashboard/dashboard-data';
import { NgDashResolver } from "./ng-dash-resolver";

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
    private dashboardFactory: NgDashResolver,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit(): void {
    this.dashboard = this.dashboardFactory.createDashboard(this.data);
    this.dashboard.widgets.forEach(widget => {
      const factory = this.componentFactoryResolver.resolveComponentFactory(widget.componentType);
      const component = this.layoutContainerRef.createComponent(factory);
      component.instance.widget = widget;
      component.changeDetectorRef.detectChanges();
    });
  }
}
