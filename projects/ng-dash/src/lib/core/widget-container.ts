import { Widget } from './widget';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export class WidgetContainer {
	constructor(
		public readonly id: number,
		public widgets: Widget[]
	) {
		this.widgets.sort(w => w.state.index);
		this.resetIndex();
		this.subscribeToWidgetEvents();
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
		this.widgets.splice(widget.state.index, 1);
		widget['__remove_sub__'].unsubscribe();
		delete widget['__remove_sub__'];
	}

	private resetIndex() {
		this.widgets.forEach((w, i) => w.state.index = i);
	}

	private subscribeToWidgetEvents() {
		this.widgets.forEach(w => {
			w['__remove_sub__'] = w.events.remove.subscribe(_ => this.removeWidget(w));
		});
	}
}
