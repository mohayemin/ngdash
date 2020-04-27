import { Widget } from './widget';
import { ContainerData as WidgetContainerData } from './simple-models';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';
import { WidgetSortEvent } from './event-data';

export class WidgetContainer {
	public index: number;
	public widgets: Widget[]

	constructor(
		data: WidgetContainerData
	) {
		this.index = data.index;
		this.widgets = data.widgets.map(wd => new Widget(wd));
		this.resetIndex();
		this.widgets.forEach(w => this.subscribeToWidgetEvents(w));
	}

	events = {
		widgetSort: new Subject<WidgetSortEvent>(),
		widgetRemove: new Subject<Widget>()
	};

	public sortWidget(widget: Widget, newIndex: number) {
		const oldIndex = widget.index;
		moveItemInArray(this.widgets, widget.index, newIndex);
		this.resetIndex();
		this.events.widgetSort.next({
			widget: widget, oldWidgetIndex: oldIndex, newWidgetIndex: newIndex
		});
	}

	public removeWidget(index: number) {
		this.widgets.splice(index, 1);
		this.resetIndex();
	}

	public insertWidget(widget: Widget, index: number) {
		this.widgets.splice(index, 0, widget);
		this.resetIndex();
	}
	
	public getData(): WidgetContainerData {
		return {
			index: this.index,
			widgets: this.widgets.map(w => w.getData())
		};
	}

	private resetIndex() {
		this.widgets.forEach((w, i) => w.index = i);
	}

	private subscribeToWidgetEvents(widget: Widget) {
		widget.events.remove.subscribe(event => {
			const widget = event;
			this.widgets.splice(widget.index, 1);
			this.events.widgetRemove.next(event);
		});
	}
}
