import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDash } from './ng-dash.component';
import { Dashboard } from '../dashboard';
import { Widget } from '../widget';
import { TestLayoutComponent } from '../../test-doubles/test-layout.component';
import { TestWidgetComponent } from '../../test-doubles/test-widget.component';
import { By } from '@angular/platform-browser';
import { WidgetContainerComponent } from './widget-container.component';
import { WidgetWrapperComponent } from './widget-wrapper.component';

describe('NgDashComponent', () => {
	let component: NgDash;
	let fixture: ComponentFixture<NgDash>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				NgDash,
				WidgetContainerComponent,
				WidgetWrapperComponent,
				TestLayoutComponent,
				TestWidgetComponent
			]
		});

		fixture = TestBed.createComponent(NgDash);
		component = fixture.componentInstance;
		component.dashboard = new Dashboard(
			[
				new Widget({ containerId: 0, index: 1 }, { text: "first one" })
				, new Widget({ containerId: 0, index: 1 }, { text: "the second" })
			],
			'default',
			{}
		);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should create the layout element', () => {
		let layoutElement = fixture.debugElement.query(By.directive(TestLayoutComponent));
		expect(layoutElement).toBeDefined();
	});

	it('should create 2 widgets', () => {
		let widgetElements = fixture.debugElement.queryAll(By.directive(TestWidgetComponent));
		expect(widgetElements.length).toBe(2);
	});
});
