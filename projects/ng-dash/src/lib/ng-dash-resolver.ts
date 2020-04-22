import { Injectable, Type } from '@angular/core';
import { DashboardData } from './dashboard/dashboard-data';
import { Dashboard } from './dashboard/dashboard';
import { Widget } from './widget/widget';
import { WidgetData } from './widget/widget-data';
import { LayoutComponent } from './layout/layout.component';
import { WidgetComponent } from './widget/widget.component';
@Injectable({
  providedIn: "root"
})
export class NgDashResolver {
  private widgetBindings: { [key: string]: Type<WidgetComponent> } = {};
  private layoutBindings: { [key: string]: Type<LayoutComponent> } = {};
  constructor() {
  }

  createDashboard(data: DashboardData) {
    let widgets = data.widgets.map(wd => this.createWidget(wd));
    let layoutCtor = this.layoutBindings[data.layoutType];
    return new Dashboard(widgets, layoutCtor, data.config);
  }

  createWidget(widgetData: WidgetData): Widget {
    let componentCtor = this.widgetBindings[widgetData.type];
    return new Widget(widgetData.containerId, widgetData.order, widgetData.config, componentCtor);
  }

  bindWidget(typeId: string, binding: Type<WidgetComponent>): NgDashResolver {
    this.widgetBindings[typeId] = binding;
    return this;
  }

  bindLayout(typeId: string, binding: Type<LayoutComponent>): NgDashResolver {
    this.layoutBindings[typeId] = binding;
    return this;
  }
}
