import { Widget } from './widget';
import { WidgetContainer } from './widget-container';
import { DashboardOptions } from './simple-models';

export interface WidgetMoveEvent {
	widget: Widget;
	oldWidgetIndex: number;
	newWidgetIndex: number;
	oldContainer: WidgetContainer;
	newCotnainer: WidgetContainer;
}

export interface WidgetSortEvent {
	widget: Widget;
	oldWidgetIndex: number;
	newWidgetIndex: number;
}

export interface DashboardOptionChangeEvent {
	changedOptionKey: keyof DashboardOptions;
	oldValue: any;
	newValue: any;
	currentOptions: DashboardOptions;
}