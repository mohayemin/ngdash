import { NgModule } from '@angular/core';
import { NgDashComponent } from './core/ui/ng-dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { SingleColumnLayoutComponent } from './layout/single-column-layout.component';
import { HtmlWidgetComponent } from './widget/html-widget.component';
import { WidgetContainerComponent } from './core/ui/widget-container.component';
import { WidgetWrapperComponent } from './core/ui/widget-wrapper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BootstrapCardWidgetComponent } from './widget/bootstrap-card-widget.component';
import { BootstrapCardWidgetHeaderComponent } from './widget/bootstrap-card-widget-header.component';
import { BootstrapCardWidgetBodyComponent } from './widget/bootstrap-card-widget-body.component';
import { BootstrapR1C2LayoutComponent } from './layout/bootstrap-r1-c2-layout.component';

@NgModule({
	declarations: [
		NgDashComponent,
		SingleColumnLayoutComponent,
		HtmlWidgetComponent,
		WidgetContainerComponent,
		WidgetWrapperComponent,
		BootstrapR1C2LayoutComponent,
		BootstrapCardWidgetComponent,
		BootstrapCardWidgetHeaderComponent,
		BootstrapCardWidgetBodyComponent,
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
	
}
