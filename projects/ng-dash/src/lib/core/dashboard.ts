import { Widget, WidgetPosition } from './widget';
import { NgDashLayout as NgDashLayout } from './registry/layout.decorator';
import { WidgetContainer } from './widget-container';

export class Dashboard {
	private containers: any = {};

	constructor(
		public widgets: Widget[],
		public layoutId: string,
		public config: any
	) {
	}

	public getContainer(id: number): WidgetContainer {
		let container = this.containers[id];
		if(!container){
			const containerWidgets = this.widgets.filter(w => w.position.containerId === id);
			container = new WidgetContainer(id, containerWidgets);
			this.containers[id] = container;
		}
		
		return this.containers[id];
	}

	public get layoutComponent() {
		return NgDashLayout.resolve(this.layoutId);
	}
}
