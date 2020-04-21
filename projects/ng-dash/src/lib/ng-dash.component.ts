import { Component, AfterViewInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Dashboard } from './dashboard/dashboard';
import { DashboardData } from './dashboard/dashboard-data';
import { NgDashResolver } from "./ng-dash-resolver";

@Component({
  selector: 'ngdash',
  template: `
    <ng-template #layout></ng-template>
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
    this.renderLayout();
  }

  renderLayout(){
    const layoutFactory = this.componentFactoryResolver.resolveComponentFactory(this.dashboard.layout);
    const layoutComponent = this.layoutContainerRef.createComponent(layoutFactory);
    layoutComponent.instance.dashboard = this.dashboard;
    layoutComponent.changeDetectorRef.detectChanges();
  }
}
