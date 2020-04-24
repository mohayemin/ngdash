import { Subject } from 'rxjs';

export class Widget {
	readonly initialState: WidgetState;

	constructor(
		public state: WidgetState,
		public config: any,
		public widgetId: string = 'default',
	) {
		this.initialState = Object.assign({}, this.state);
	}

	removeRequest = new Subject<void>();
}

export type WidgetState = {
	containerId: number;
	index: number;
	isDeleted?: boolean;
};
