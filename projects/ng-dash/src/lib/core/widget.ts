import { NgDashWidgetHeader } from './registry/ng-dash-widget-header.decorator';
import { NgDashWidgetBody } from './registry/ng-dash-widget-body.decorator';

export class Widget {
	readonly initialPosition: WidgetPosition;

	constructor(
		public position: WidgetPosition,
		public config: any,
		public bodyId: string = 'default',
		public headerId: string = 'default',
	) {
		this.initialPosition = {
			containerId: position.containerId,
			index: position.index
		};
	}

	get headerComponent() {
		return NgDashWidgetHeader.resolve(this.headerId);
	}

	get bodyComponent(){
		return NgDashWidgetBody.resolve(this.bodyId);
	}
}

export interface WidgetPosition {
	containerId: number;
	index: number;
}
