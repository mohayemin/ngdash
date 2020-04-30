import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngdash } from './ngdash.component';
import { Dashboard } from '../dashboard';
import { Widget } from '../widget';
import { TestLayoutComponent } from '../../test-doubles/test-layout.component';
import { TestWidgetComponent } from '../../test-doubles/test-widget.component';
import { By } from '@angular/platform-browser';
import { WidgetContainerComponent } from './widget-container.component';
import { WidgetWrapperComponent } from './widget-wrapper.component';

describe('NgDashComponent', () => {
	let component: Ngdash;
	let fixture: ComponentFixture<Ngdash>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				Ngdash,
				WidgetContainerComponent,
				WidgetWrapperComponent,
				TestLayoutComponent,
				TestWidgetComponent
			]
		});

		fixture = TestBed.createComponent(Ngdash);
		component = fixture.componentInstance;
		component.dashboard = new Dashboard({
			containers: [{
				widgets: [{}, {}]
			}]
		});

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
