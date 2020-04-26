import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

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

	private changeEvent = new Subject<Widget>();
	events = {
		remove: this.createWidgetEmitter(),
		toggle: this.createWidgetEmitter(),
		change: this.changeEvent,
	};

	remove() {
		this.state.isDeleted = true;
		this.events.remove.next(this);
	}

	toggle() {
		this.state.isCollapsed = !this.state.isCollapsed;
		this.events.toggle.next(this);
	}

	private createWidgetEmitter() {
		const subject = new Subject<Widget>();
		subject.pipe(
			tap(w => this.changeEvent.next(w))
		);
		return subject;
	}
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
	isCollapsed?: boolean;
};
