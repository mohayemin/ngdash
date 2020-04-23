import { Type } from '@angular/core';
import { WidgetBodyComponent } from './widget-body.component';
import { DefaultWidgetHeaderComponent } from './default-widget-header.component';
import { WidgetHeaderComponent } from './widget-header.component';

export class Widget {
	readonly initialPosition: WidgetPosition;

	constructor(
		public position: WidgetPosition,
		public config: any,
		public bodyComponent: Type<WidgetBodyComponent>,
		public headerComponent: Type<WidgetHeaderComponent> = DefaultWidgetHeaderComponent
	) {
		this.initialPosition = {
			containerId: position.containerId,
			index: position.index
		};
	}
}

export interface WidgetPosition {
	containerId: number;
	index: number;
}
