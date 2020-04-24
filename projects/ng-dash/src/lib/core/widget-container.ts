import { Widget } from './widget';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export class WidgetContainer {
	constructor(
		public readonly id: number,
		public readonly widgets: Widget[]
	) {
		this.widgets.sort(w => w.position.index);
		this.resetIndex();
	}

	public moveWidget(widget: Widget, newIndex: number): void {
		moveItemInArray(this.widgets, widget.position.index, newIndex);
		this.resetIndex();
	}

	public acquireWidget(widget: Widget, targetIndex: number, source: WidgetContainer) {
		transferArrayItem(source.widgets, this.widgets, widget.position.index, targetIndex);
		widget.position.containerId = source.id;
		this.resetIndex();
		source.resetIndex();
	}

	private resetIndex() {
		this.widgets.forEach((w, i) => w.position.index = i);
	}
}
