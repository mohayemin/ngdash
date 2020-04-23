import { NgModule } from '@angular/core';
import { NgDashComponent } from './core/ng-dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { SingleColumnLayoutComponent } from './layouts/single-column-layout.component';
import { NgDashResolver } from './ng-dash-resolver';
import { HtmlWidgetComponent } from './widget/html-widget.component';
import { WidgetContainerComponent } from './core/widget-container.component';
import { WidgetWrapperComponent } from './core/widget-wrapper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BootstrapR1C2LayoutComponent } from './layouts/bootstrap-r1-c2-layout.component';
import { DefaultWidgetHeaderComponent } from './core/default-widget-header.component';

@NgModule({
	declarations: [
		NgDashComponent,
		SingleColumnLayoutComponent,
		HtmlWidgetComponent,
		WidgetContainerComponent,
		WidgetWrapperComponent,
		BootstrapR1C2LayoutComponent,
		DefaultWidgetHeaderComponent,
	],
	imports: [
		BrowserModule,
		DragDropModule
	],
	exports: [
		NgDashComponent
	]
})
export class NgDashModule {
	constructor(resolver: NgDashResolver) {
		resolver
			.bindWidget("html", HtmlWidgetComponent);
	}
}
