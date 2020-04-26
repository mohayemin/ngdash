import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WidgetMoveEvent } from './events/widget-move-event';
import { WidgetData, WidgetState, WidgetUi } from './widget-data';

export class Widget {
	public readonly initialState: WidgetState;
	public readonly state: WidgetState;
	public readonly config: any;
	public readonly ui: WidgetUi;

	constructor(
		data: WidgetData
	) {
		this.state = Object.assign({}, data.state);
		this.config = Object.assign({}, data.config || {});
		this.ui = Object.assign({}, data.ui || {});

		this.initialState = Object.assign({}, this.state);
	}

	private changeEvent = new Subject<any>();
	events = {
		remove: this.createWidgetEmitter<Widget>(),
		toggle: this.createWidgetEmitter<Widget>(),
		move: this.createWidgetEmitter<WidgetMoveEvent>(),
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

	move(newContainerId: number, newIindex: number) {
		const previousContainerId = this.state.containerId;
		const previousIndex = this.state.index;

		this.state.containerId = newContainerId;
		this.state.index = newIindex;

		this.events.move.next({
			widget: this,
			previousContainerId: previousContainerId,
			previousIndex: previousIndex
		});
	}

	getData(): WidgetData {
		return {
			state: Object.assign({}, this.state),
			config: Object.assign({}, this.config),
			ui: Object.assign({}, this.ui),
		};
	}

	private createWidgetEmitter<T>() {
		const subject = new Subject<T>();
		subject.pipe(
			tap(data => this.changeEvent.next(data))
		);
		return subject;
	}
}

