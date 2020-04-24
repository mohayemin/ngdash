import { Widget } from './widget';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export class WidgetContainer {
	constructor(
		public readonly id: number,
		public widgets: Widget[]
	) {
		this.widgets.sort(w => w.state.index);
		this.filterWidgets();
		this.resetIndex();
	}

	public moveWidget(widget: Widget, newIndex: number): void {
		moveItemInArray(this.widgets, widget.state.index, newIndex);
		this.resetIndex();
	}

	public acquireWidget(widget: Widget, targetIndex: number, source: WidgetContainer) {
		transferArrayItem(source.widgets, this.widgets, widget.state.index, targetIndex);
		widget.state.containerId = source.id;
		this.resetIndex();
		source.resetIndex();
	}

	public removeWidget(widget: Widget) {
		widget.state.isDeleted = true;
		this.filterWidgets();
	}

	private resetIndex() {
		this.widgets.forEach((w, i) => w.state.index = i);
	}

	private filterWidgets() {
		this.widgets = this.widgets.filter(w => !w.state.isDeleted);
	}
}
