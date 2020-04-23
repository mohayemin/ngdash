import { Widget, WidgetPosition } from '../widget/widget';

export interface WidgetMoveEvent {
	widget: Widget,
	previousPosition: WidgetPosition,
}
