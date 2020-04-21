import { Widget } from './widget';
import { Injectable, Type } from '@angular/core';
import { WidgetData } from './widget-data';

@Injectable({
  providedIn: 'root'
})
export class WidgetFactory {
	private bindings: { [key: string]: Type<Widget>} = {};

  constructor() {
  }

	bind(typeId: string, binding: Type<Widget>): WidgetFactory{
		this.bindings[typeId] = binding;
		return this;
	}

	createModel(widgetData: WidgetData): Widget {
    let modelType = this.bindings[widgetData.type];
		return new modelType(widgetData.containerId, widgetData.order, widgetData.config);
  }
}

