import { Injectable, Type } from '@angular/core';
import { DashboardData } from './dashboard/dashboard-data';
import { Dashboard } from './dashboard/dashboard';
import { Widget } from './widget/widget';
import { WidgetData } from './widget/widget-data';
import { WidgetBodyComponent } from './widget/widget-body.component';
@Injectable({
  providedIn: "root"
})
export class NgDashResolver {
  private widgetBindings: { [key: string]: Type<WidgetBodyComponent> } = {};
  constructor() {
  }

  createDashboard(data: DashboardData) {
    let widgets = data.widgets.map(wd => this.createWidget(wd));
    return new Dashboard(widgets, data.layoutId, data.config);
  }

  createWidget(widgetData: WidgetData): Widget {
    let componentCtor = this.widgetBindings[widgetData.type];
    return new Widget({containerId: widgetData.containerId, index: widgetData.order}, widgetData.config, componentCtor);
  }

  bindWidget(typeId: string, binding: Type<WidgetBodyComponent>): NgDashResolver {
    this.widgetBindings[typeId] = binding;
    return this;
  }
}
