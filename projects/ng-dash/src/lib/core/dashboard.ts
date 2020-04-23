import { Widget } from './widget';
import { NgDashLayout as NgDashLayout } from './layout.decorator';

export class Dashboard {
	constructor(
		public widgets: Widget[],
		public layoutId: string,
		public config: any
	) {
	}

	get layoutComponent() {
		return NgDashLayout.resolveLayout(this.layoutId);
	}
}
