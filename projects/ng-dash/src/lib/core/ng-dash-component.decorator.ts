import { Type } from '@angular/core';
import { Dictionary } from '../utils/types';

export const NgDashComponent = createComponentDecorator();

/**
 * Todo: Add other possible types here when necessary
 */
export type ComponentCategory = 'widget' |
	'layout' |
	'widget-header' |
	'widget-body' |
	'other'

export function createComponentDecorator() {
	const registry: Dictionary<Dictionary<Type<any>>> = {}

	const decorator = function (category: ComponentCategory, id: string) {
		return function (target: Type<any>) {
			if (!registry[category])
				registry[category] = {};

			registry[category][id] = target;
		}
	};

	decorator.resolve = function (category: ComponentCategory, id: string) {
		if (!registry[category] && !registry[category][id])
			throw new Error(`No components registered with ${category} and id ${id}.`);

		return registry[category][id];
	};

	decorator.resolveInCategory = function(category: ComponentCategory){
		return Object.values(registry[category] || {});
	};

	return decorator;
}