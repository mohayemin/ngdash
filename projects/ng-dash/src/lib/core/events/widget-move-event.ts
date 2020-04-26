import { Widget } from '../widget';

export interface WidgetMoveEvent {
	widget: Widget,
	previousIndex: number,
	previousContainerId: number,
}
