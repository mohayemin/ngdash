import { Widget } from './widget';
import { ContainerData as WidgetContainerData } from './simple-models';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';
import { WidgetSortEvent } from './event-data';
import { pseudoUniqueId } from '../utils/pseudo-unique-id';
import { Id } from '../utils/types';
import { isUndefined } from 'util';

export class WidgetContainer {
	public readonly uniqueId: Id;
	public widgets: Widget[]

	constructor(
		data: WidgetContainerData
	) {
		this.uniqueId = isUndefined(data.uniqueId) ? pseudoUniqueId() : data.uniqueId;
		this.widgets = data.widgets.map(wd => new Widget(wd));
		this.subscribeWidgetEvents();
	}

	events = {
		widgetSort: new Subject<WidgetSortEvent>(),
		widgetRemove: new Subject<Widget>()
	};

	public sortWidget(widget: Widget, newIndex: number) {
		const oldIndex = this.findIndex(widget);
		moveItemInArray(this.widgets, oldIndex, newIndex);
		this.events.widgetSort.next({
			widget: widget, oldWidgetIndex: oldIndex, newWidgetIndex: newIndex
		});
	}

	public removeWidget(widget: Widget) {
		const index = this.findIndex(widget);
		this.widgets.splice(index, 1);
		return index;
	}

	private findIndex(widget: Widget) {
		return this.widgets.findIndex(w => w === widget);
	}

	public insertWidget(widget: Widget, index: number) {
		this.widgets.splice(index, 0, widget);
	}

	public getData(): WidgetContainerData {
		return {
			uniqueId: this.uniqueId,
			widgets: this.widgets.map(w => w.getData())
		};
	}

	private subscribeWidgetEvents() {
		this.widgets.forEach(w => {
			w.events.remove.subscribe(event => {
				this.removeWidget(event);
				this.events.widgetRemove.next(event);
			});
		});
	}
}
