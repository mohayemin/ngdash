import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WidgetData, WidgetUi, WidgetState } from './simple-models';
import { pseudoUniqueId } from '../utils/pseudo-unique-id';
import { Id } from '../utils/types';
import { isUndefined } from 'util';

export class Widget {
	public readonly uniqueId: Id;
	public readonly state: WidgetState;
	public readonly config: any;
	public readonly ui: WidgetUi;

	constructor(
		data: WidgetData
	) {
		this.uniqueId = isUndefined(data.uniqueId) ? pseudoUniqueId() : data.uniqueId;
		this.state = Object.assign({}, data.state);
		this.config = Object.assign({}, data.config || {});
		this.ui = Object.assign({}, data.ui || {});
	}

	private changeEvent = new Subject<any>();
	events = {
		remove: this.createWidgetEmitter<Widget>(),
		toggle: this.createWidgetEmitter<Widget>(),
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

	getData(): WidgetData {
		return {
			uniqueId: this.uniqueId,
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

