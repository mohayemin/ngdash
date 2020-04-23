import { Widget } from './widget';
import { NgDashLayout as NgDashLayout } from './registry/ng-dash-layout.decorator';

export class Dashboard {
	constructor(
		public widgets: Widget[],
		public layoutId: string,
		public config: any
	) {
	}

	get layoutComponent() {
		return NgDashLayout.resolve(this.layoutId);
	}
}
