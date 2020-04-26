import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWrapperComponent } from './widget-wrapper.component';
import { Widget } from '../widget';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { WidgetContainerComponent } from './widget-container.component';

describe('WidgetWrapperComponent', () => {
	let component: WidgetWrapperComponent;
	let fixture: ComponentFixture<WidgetWrapperComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				WidgetWrapperComponent,
				WidgetContainerComponent,
			],
		}).overrideModule(BrowserDynamicTestingModule, {
			set: {
				entryComponents: [WidgetWrapperComponent]
			}
		});

		fixture = TestBed.createComponent(WidgetWrapperComponent);
		component = fixture.componentInstance;
		component.widget = new Widget({ state: { containerId: 0, index: 0 } });
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
