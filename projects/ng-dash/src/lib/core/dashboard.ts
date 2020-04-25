import { Widget, WidgetState } from './widget';
import { WidgetContainer } from './widget-container';
import { NgDashComponent } from './ng-dash-component.decorator';

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
			const containerWidgets = this.widgets.filter(w => w.state.containerId === id);
			container = new WidgetContainer(id, containerWidgets);
			this.containers[id] = container;
		}
		
		return this.containers[id];
	}

	public get layoutComponent() {
		return NgDashComponent.resolve('layout', this.layoutId);
	}
}
