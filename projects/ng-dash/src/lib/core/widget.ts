import { Subject } from 'rxjs';

export class Widget {
	readonly initialPosition: WidgetPosition;

	constructor(
		public position: WidgetPosition,
		public config: any,
		public widgetId: string = 'default',
	) {
		this.initialPosition = {
			containerId: position.containerId,
			index: position.index
		};
	}

	changePositionRequest = new Subject<WidgetPosition>();
}

export interface WidgetPosition {
	containerId: number;
	index: number;
}
