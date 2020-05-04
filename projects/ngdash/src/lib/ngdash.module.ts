import { NgModule } from '@angular/core';
import { Ngdash } from './core/ui/ngdash.component';
import { BrowserModule } from '@angular/platform-browser';
import { HtmlWidgetComponent } from './widget/html-widget.component';
import { WidgetContainerComponent } from './core/ui/widget-container.component';
import { WidgetWrapperComponent } from './core/ui/widget-wrapper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SimpleWidgetHeaderComponent } from './widget/simple-widget/simple-widget-header.component';
import { SimpleWidgetBodyComponent } from './widget/simple-widget/simple-widget-body.component';
import { BootstrapR1C2LayoutComponent } from './layout/bootstrap-r1-c2-layout.component';
import { WidgetHeaderButtonSetComponent } from './utils/widget-header-button-set.component';
import { WidgetDeleteButtonComponent } from './utils/widget-delete-button.component';
import { WidgetToggleButtonComponent } from './utils/widget-toggle-button.component';
import { NgdashResolver } from './core/ngdash-resolver';
import { BootstrapR2C2LayoutComponent } from './layout/bootstrap-r2-c2-layout.component';
import { SimpleWidgetComponent } from './widget/simple-widget/simple-widget.component';

@NgModule({
	declarations: [
		Ngdash,
		HtmlWidgetComponent,
		WidgetContainerComponent,
		WidgetWrapperComponent,
		BootstrapR1C2LayoutComponent,
		BootstrapR2C2LayoutComponent,
		SimpleWidgetHeaderComponent,
		SimpleWidgetBodyComponent,
		WidgetHeaderButtonSetComponent,
		WidgetDeleteButtonComponent,
		WidgetToggleButtonComponent,
		SimpleWidgetComponent,
	],
	imports: [
		BrowserModule,
		DragDropModule
	],
	exports: [
		Ngdash
	]
})
export class NgdashModule {
	constructor(resolver: NgdashResolver) {
		 resolver
		 	.bind(SimpleWidgetComponent, 'widget', 'default')
		 	.bind(SimpleWidgetComponent, 'widget', 'simple')
		 	.bind(BootstrapR1C2LayoutComponent, 'layout', 'default')
		 	.bind(BootstrapR1C2LayoutComponent, 'layout', 'ngdash-bootstrap-r1-c2-layout')
		 	.bind(SimpleWidgetBodyComponent, 'widget-body', 'default')
		 	.bind(SimpleWidgetBodyComponent, 'widget-body', 'simple')
		 	.bind(SimpleWidgetHeaderComponent, 'widget-header', 'default')
		 	.bind(SimpleWidgetHeaderComponent, 'widget-header', 'simple')
			;

		resolver
			.bind(BootstrapR2C2LayoutComponent, 'layout', 'ngdash-bootstrap-r2-c2-layout')
		;
	}
}
