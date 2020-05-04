import { Type, Injectable } from '@angular/core';
import { Dictionary, Id } from '../utils/types';

@Injectable({
	providedIn: 'root',
})
export class NgdashResolver {
	private registry: Dictionary<Dictionary<Type<any>>> = {}

	bind(bindTo: Type<any>, category: BindingCategory, id: Id): NgdashResolver {
		id = id || 'default';
		if (!this.registry[category])
			this.registry[category] = {};

		this.registry[category][id] = bindTo;

		return this;
	}

	resolve(category: BindingCategory, id: Id): Type<any> {
		id = id || 'default';
		if (!this.registry[category] || !this.registry[category][id])
			throw new Error(`No components registered of category ${category} and id ${id}.`);

		return this.registry[category][id];
	}
}

export type BindingCategory = 'widget' | 'layout' | 'widget-header' | 'widget-body' | 'other';

