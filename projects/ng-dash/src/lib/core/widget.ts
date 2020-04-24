import { Subject } from 'rxjs';

export class Widget {
	readonly initialState: WidgetState;

	constructor(
		public state: WidgetState,
		public config: any,
		public widgetId: string = 'default',
	) {
		this.initialState = {
			containerId: state.containerId,
			index: state.index,
			isDeleted: state.isDeleted
		};
	}

	removeRequest = new Subject<void>();
}

export interface WidgetState {
	containerId: number;
	index: number;
	isDeleted?: boolean;
}
