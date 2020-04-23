import { Type } from '@angular/core';

const registeredLayouts: { [id: string]: Type<any> } = {}

/**
 * Mark a component as a layout
 * @param id a unique ID to identify the layout
 */
export function NgDashLayout(id: string) {
  return function (target: Type<any>) {
    if (registeredLayouts[id])
      console.warn('multiple layouts with same ID is created. Discurding previous layouts');

    registeredLayouts[id] = target;
  }
}

NgDashLayout.resolveLayout = function(id: string){
  return registeredLayouts[id];
};
