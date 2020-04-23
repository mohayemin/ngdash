import { Widget, WidgetPosition } from './widget';

export interface WidgetMoveEvent {
	widget: Widget,
	previousPosition: WidgetPosition,
}
