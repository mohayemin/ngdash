import { Widget } from './widget';
import { WidgetContainer } from './widget-container';
import { Subject } from 'rxjs';
import { WidgetMoveEvent as WidgetTransferEvent, WidgetSortEvent } from './event-data';
import { DashboardData } from './simple-models';

export class Dashboard {
	public readonly containers: WidgetContainer[];
	public readonly layoutId: string;
	public readonly config: any;

	constructor(
		data: DashboardData
	) {
		this.containers = data.containers.map(cd => new WidgetContainer(cd));
		this.resetContainerIndex();

		this.layoutId = data.layoutId;
		this.config = Object.assign({}, data.config);
		this.containers.forEach(c => this.subscribeContainerEvents(c));
	}

	public readonly events = {
		widgetTransfer: new Subject<WidgetTransferEvent>(),
		widgetRemove: new Subject<Widget>(),
		widgetToggle: new Subject<Widget>(),
		widgetSort: new Subject<WidgetSortEvent>(),
	};

	public getContainer(index: number): WidgetContainer {
		let container = this.containers[index];
		if (!container) {
			container = new WidgetContainer({ index: index, widgets: [] });
			this.containers[index] = container;
		}

		return container;
	}


	public transferWidget(widget: Widget, to: WidgetContainer, newIndex: number) {
		const oldIndex = widget.index;
		const from = this.containers.find(c => c.widgets[widget.index] === widget);
		from.removeWidget(widget.index);
		to.insertWidget(widget, newIndex);
		this.events.widgetTransfer.next({
			widget: widget,
			oldWidgetIndex: oldIndex,
			newWidgetIndex: newIndex,
			oldContainer: from,
			newCotnainer: to
		});
	}

	public getData(): DashboardData {
		return {
			containers: this.containers.map(c => c.getData()),
			config: Object.assign({}, this.config),
			layoutId: this.layoutId
		};
	}

	private subscribeContainerEvents(container: WidgetContainer): void {
		container.events.widgetSort.subscribe(event => this.events.widgetSort.next(event));
		container.events.widgetRemove.subscribe(event => this.events.widgetRemove.next(event));
		container.widgets.forEach(w => {
			this.subscribeWidgetEvents(w);
		});
	}

	private subscribeWidgetEvents(widget: Widget) {
		widget.events.toggle.subscribe(event => this.events.widgetToggle.next(event));
	}

	private resetContainerIndex() {
		this.containers.forEach((c, i) => c.index = i);
	}
}
