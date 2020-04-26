import { TestBed, ComponentFixture } from '@angular/core/testing';

import { WidgetContainerComponent } from './widget-container.component';
import { WidgetContainer } from '../widget-container';
import { Widget } from '../widget';
import { By } from '@angular/platform-browser';
import { WidgetWrapperComponent } from './widget-wrapper.component';
import { TestWidgetComponent } from '../../test-doubles/test-widget.component';

describe('WidgetContainerComponent', () => {
	let component: WidgetContainerComponent;
	let fixture: ComponentFixture<WidgetContainerComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				WidgetContainerComponent,
				WidgetWrapperComponent,
				TestWidgetComponent
			]
		});

		fixture = TestBed.createComponent(WidgetContainerComponent);
		component = fixture.componentInstance;
		component.container = new WidgetContainer(0, [
			new Widget({ state: { containerId: 0, index: 0 } }),
			new Widget({ state: { containerId: 0, index: 1 } })
		]);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have two wrappers', () => {
		const wrappercount = fixture.debugElement.queryAll(By.directive(TestWidgetComponent)).length;
		expect(wrappercount).toBe(2);
	});
});
