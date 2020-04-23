import { Injectable, Type } from '@angular/core';
import { DashboardData } from './core/dashboard-data';
import { Dashboard } from './core/dashboard';
import { Widget } from './core/widget';
import { WidgetData } from './core/widget-data';
import { WidgetBodyComponent } from './core/widget-body.component';
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
		return new Widget({ containerId: widgetData.containerId, index: widgetData.order }, widgetData.config, componentCtor);
	}

	bindWidget(typeId: string, binding: Type<WidgetBodyComponent>): NgDashResolver {
		this.widgetBindings[typeId] = binding;
		return this;
	}
}
