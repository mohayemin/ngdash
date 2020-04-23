import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetContainerComponent } from './widget-container.component';

describe('WidgetContainerComponent', () => {

	it('should not create because it requires a parent ngdashComponent', () => {
		TestBed.configureTestingModule({
			declarations: [WidgetContainerComponent]
		}).compileComponents();

		expect(() => TestBed.createComponent(WidgetContainerComponent))
			.toThrowError();
	});
});
