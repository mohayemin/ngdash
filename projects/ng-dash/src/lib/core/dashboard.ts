import { Widget } from './widget';
import { WidgetContainer } from './widget-container';
import { Dictionary } from '../utils/types';
import { Subject } from 'rxjs';
import { WidgetMoveEvent } from './widget-move-event';

export class Dashboard {
	private containers: Dictionary<WidgetContainer> = {};

	constructor(
		public widgets: Widget[],
		public layoutId: string,
		public config: any
	) {
		this.widgets.forEach(w => {
			this.subscribeWidgetEvents(w);
		});
	}

	events = {
		widgetMove: new Subject<WidgetMoveEvent>(),
		widgetRemove: new Subject<Widget>(),
		widgetToggle: new Subject<Widget>(),
	};

	public getContainer(id: number): WidgetContainer {
		let container = this.containers[id];
		if (!container) {
			const containerWidgets = this.widgets.filter(w => w.state.containerId === id);
			container = new WidgetContainer(id, containerWidgets);
			this.containers[id] = container;
		}

		return this.containers[id];
	}

	private subscribeWidgetEvents(widget: Widget) {
		widget.events.remove.subscribe(event => {
			const widget = event;
			this.removeFromContainer(widget.state.containerId, widget.state.index)
			this.events.widgetRemove.next(event);
		});
		widget.events.move.subscribe(event => {
			this.removeFromContainer(event.previousContainerId, event.previousIndex);
			this.insertToContainer(event.widget);
			this.events.widgetMove.next(event);
		});
		widget.events.toggle.subscribe(event => this.events.widgetToggle.next(event));
	}

	private removeFromContainer(containerId: number, index: number) {
		this.containers[containerId].removeWidget(index);
	}

	private insertToContainer(widget: Widget) {
		this.containers[widget.state.containerId].insertWidget(widget);
	}
}
