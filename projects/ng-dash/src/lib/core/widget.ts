import { Subject } from 'rxjs';

export class Widget {
	readonly initialState: WidgetState;

	constructor(
		public state: WidgetState,
		public config: any,
		public ui: WidgetUi = {
			widgetId: 'default'
		},
	) {
		this.initialState = Object.assign({}, this.state);
	}

	removeRequest = new Subject<void>();
}

export type WidgetUi = {
	widgetId?: string;
	headerId?: string;
	bodyId?: string;
};

export type WidgetState = {
	containerId: number;
	index: number;
	isDeleted?: boolean;
};
