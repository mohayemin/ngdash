import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { WidgetWrapperComponent } from './widget-wrapper.component';
import { Widget } from '../../widget/widget';
import { TextWidgetComponent } from '../../test-doubles/text-widget/text-widget.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { WidgetContainerComponent } from '../widget-container/widget-container.component';

describe('WidgetWrapperComponent', () => {
	let component: WidgetWrapperComponent;
	let fixture: ComponentFixture<WidgetWrapperComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [WidgetWrapperComponent, WidgetContainerComponent, TextWidgetComponent],
		}).overrideModule(BrowserDynamicTestingModule, {
			set: {
				entryComponents: [WidgetWrapperComponent]
			}
		});

		fixture = TestBed.createComponent(WidgetWrapperComponent);
		component = fixture.componentInstance;
		component.widget = new Widget({ containerId: 0, index: 0 }, { text: "here I am" }, TextWidgetComponent);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
