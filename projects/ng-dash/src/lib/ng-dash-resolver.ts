import { Injectable, Type } from '@angular/core';
import { DashboardData } from './dashboard/dashboard-data';
import { Dashboard } from './dashboard/dashboard';
import { Widget } from './widget/widget';
import { WidgetData } from './widget/widget-data';
@Injectable({
	providedIn: "root"
})
export class NgDashResolver {
  private widgetBindings: { [key: string]: Type<Widget>} = {};
	constructor() {
  }

	createDashboard(data: DashboardData) {
		let widgets = data.widgets.map(wd => this.createWidget(wd));
		return new Dashboard(widgets, data.config);
  }

  bindWidget(typeId: string, binding: Type<Widget>): NgDashResolver{
		this.widgetBindings[typeId] = binding;
		return this;
  }

  createWidget(widgetData: WidgetData): Widget {
    let widgetCtor = this.widgetBindings[widgetData.type];
		return new widgetCtor(widgetData.containerId, widgetData.order, widgetData.config);
  }
}
