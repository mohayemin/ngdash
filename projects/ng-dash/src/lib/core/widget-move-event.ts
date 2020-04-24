import { Widget, WidgetState } from './widget';

export interface WidgetMoveEvent {
	widget: Widget,
	previousPosition: WidgetState,
}
