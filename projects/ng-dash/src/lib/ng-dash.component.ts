import { Component, AfterViewInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'ngdash',
  template: `
    <div cdkDropListGroup class="ngdash">
      <ng-template #layout></ng-template>
    </div>
  `,
  styles: [
  ]
})
export class NgDashComponent implements AfterViewInit {
  @Input()
  dashboard: Dashboard;

  @ViewChild("layout", { read: ViewContainerRef })
  layoutContainerRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit(): void {
    this.renderLayout();
  }

  renderLayout(){
    const layoutFactory = this.componentFactoryResolver.resolveComponentFactory(this.dashboard.layout);
    const layoutComponent = this.layoutContainerRef.createComponent(layoutFactory);
    layoutComponent.changeDetectorRef.detectChanges();
  }
}
