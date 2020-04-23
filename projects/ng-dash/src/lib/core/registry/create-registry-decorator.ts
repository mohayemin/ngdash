import { Type } from '@angular/core';

export function createRegistryDecorator() {
	const registry: { [id: string]: Type<any> } = {}

	const decorator = function (id: string) {
		return function (target: Type<any>) {
			if (registry[id])
				console.warn(`multiple registrations with same ID. Discarding previous registrations.`);

			registry[id] = target;
		}
	};

	decorator.resolve = function (id: string) {
		if(!registry[id])
			throw new Error(`could not resolve ${id}.`);

		return registry[id];
	};

	return decorator;
}