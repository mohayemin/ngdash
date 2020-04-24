export class Widget {
	readonly initialPosition: WidgetPosition;

	constructor(
		public position: WidgetPosition,
		public config: any,
		public ui: WidgetUi,
	) {
		this.initialPosition = {
			containerId: position.containerId,
			index: position.index
		};
	}
}

export interface WidgetPosition {
	containerId: number;
	index: number;
}

/**
 * One or more of the component IDs must be provided
 */
export interface WidgetUi {
	widgetId?: string;
}