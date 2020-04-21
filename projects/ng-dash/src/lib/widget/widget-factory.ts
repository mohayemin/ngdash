import { Widget } from './widget';
import { Type } from '@angular/core';

export class WidgetFactory {
	private bindings: { [key: string]: WidgetType} = {};

	bind(typeId: string, typeClass: WidgetType): WidgetFactory{
		this.bindings[typeId] = typeClass;
		return this;
	}

	create(typeId: string): Widget {
		let widgetType = this.bindings[typeId];
		let widget = new widgetType();
		return widget;
	}
}

interface WidgetType {
  new (...args: any[]) : Widget
}
