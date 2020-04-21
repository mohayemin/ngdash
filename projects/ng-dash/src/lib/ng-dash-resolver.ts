import { Injectable, Type } from '@angular/core';
import { DashboardData } from './dashboard/dashboard-data';
import { Dashboard } from './dashboard/dashboard';
import { Widget } from './widget/widget';
import { WidgetData } from './widget/widget-data';
import { LayoutComponent } from './layout/layout.component';
@Injectable({
  providedIn: "root"
})
export class NgDashResolver {
  private widgetBindings: { [key: string]: Type<Widget> } = {};
  private layoutBindings: { [key: string]: Type<LayoutComponent> } = {};
  constructor() {
  }

  createDashboard(data: DashboardData) {
    let widgets = data.widgets.map(wd => this.createWidget(wd));
    let layout = this.layoutBindings[data.layoutType];
    return new Dashboard(widgets, layout, data.config);
  }

  bindWidget(typeId: string, binding: Type<Widget>): NgDashResolver {
    this.widgetBindings[typeId] = binding;
    return this;
  }

  createWidget(widgetData: WidgetData): Widget {
    let widgetCtor = this.widgetBindings[widgetData.type];
    return new widgetCtor(widgetData.containerId, widgetData.order, widgetData.config);
  }

  bindLayout(typeId: string, binding: Type<LayoutComponent>): NgDashResolver {
    this.layoutBindings[typeId] = binding;
    return this;
  }
}
