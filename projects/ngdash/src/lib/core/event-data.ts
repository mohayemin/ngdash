import { Widget } from './widget';
import { WidgetContainer } from './widget-container';

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
