import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { WidgetMoveEvent } from './events/widget-move-event';

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

	private createWidgetEmitter<T>() {
		const subject = new Subject<T>();
		subject.pipe(
			tap(data => this.changeEvent.next(data))
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
