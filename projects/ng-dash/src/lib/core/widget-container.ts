import { Widget } from './widget';
import { moveItemInArray } from '@angular/cdk/drag-drop';

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

	private resetIndex() {
		this.widgets.forEach((w, i) => w.position.index = i);
	}
}
