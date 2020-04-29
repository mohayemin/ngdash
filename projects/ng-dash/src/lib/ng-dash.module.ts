import { NgModule } from '@angular/core';
import { NgDash } from './core/ui/ng-dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { HtmlWidgetComponent } from './widget/html-widget.component';
import { WidgetContainerComponent } from './core/ui/widget-container.component';
import { WidgetWrapperComponent } from './core/ui/widget-wrapper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BootstrapCardWidgetHeaderComponent } from './widget/bootstrap-card-widget-header.component';
import { BootstrapCardWidgetBodyComponent } from './widget/bootstrap-card-widget-body.component';
import { BootstrapR1C2LayoutComponent } from './layout/bootstrap-r1-c2-layout.component';
import { BootstrapCardWidgetComponent } from './widget/bootstrap-card-widget.component';
import { WidgetHeaderButtonSetComponent } from './utils/widget-header-button-set.component';
import { WidgetDeleteButtonComponent } from './utils/widget-delete-button.component';
import { WidgetToggleButtonComponent } from './utils/widget-toggle-button.component';
import { NgDashResolver } from './core/ng-dash-resolver';

@NgModule({
	declarations: [
		NgDash,
		HtmlWidgetComponent,
		WidgetContainerComponent,
		WidgetWrapperComponent,
		BootstrapR1C2LayoutComponent,
		BootstrapCardWidgetComponent,
		BootstrapCardWidgetHeaderComponent,
		BootstrapCardWidgetBodyComponent,
		WidgetHeaderButtonSetComponent,
		WidgetDeleteButtonComponent,
		WidgetToggleButtonComponent,
	],
	imports: [
		BrowserModule,
		DragDropModule
	],
	exports: [
		NgDash
	]
})
export class NgDashModule {
	constructor(resolver: NgDashResolver) {
		 resolver
		 	.bind(BootstrapCardWidgetComponent, 'widget', 'default')
		// 	.bind(BootstrapCardWidgetComponent, 'widget', 'ngdash-bootstrap-card-widget')
		 	.bind(BootstrapR1C2LayoutComponent, 'layout', 'default')
		 	.bind(BootstrapR1C2LayoutComponent, 'layout', 'ngdash-bootstrap-r1-c2-layout')
		 	.bind(BootstrapCardWidgetBodyComponent, 'widget-body', 'default')
		// 	.bind(BootstrapCardWidgetBodyComponent, 'widget-body', 'ngdash-bootstrap-card-widget-body')
		 	.bind(BootstrapCardWidgetHeaderComponent, 'widget-header', 'default')
		// 	.bind(BootstrapCardWidgetHeaderComponent, 'widget-header', 'ngdash-bootstrap-card-widget-header')
			;
	}
}
