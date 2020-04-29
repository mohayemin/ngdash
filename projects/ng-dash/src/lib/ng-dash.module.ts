import { NgModule } from '@angular/core';
import { NgDash } from './core/ui/ng-dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { HtmlWidgetComponent } from './widget/html-widget.component';
import { WidgetContainerComponent } from './core/ui/widget-container.component';
import { WidgetWrapperComponent } from './core/ui/widget-wrapper.component';
import { DragDropModule, CdkDropList } from '@angular/cdk/drag-drop';
import { BootstrapCardWidgetHeaderComponent } from './widget/bootstrap-card-widget-header.component';
import { BootstrapCardWidgetBodyComponent } from './widget/bootstrap-card-widget-body.component';
import { BootstrapR1C2LayoutComponent } from './layout/bootstrap-r1-c2-layout.component';
import { BootstrapCardWidgetComponent } from './widget/bootstrap-card-widget.component';
import { WidgetHeaderButtonSetComponent } from './utils/widget-header-button-set.component';
import { WidgetDeleteButtonComponent } from './utils/widget-delete-button.component';
import { WidgetToggleButtonComponent } from './utils/widget-toggle-button.component';

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
		DragDropModule,
	],
	exports: [
		NgDash
	]
})
export class NgDashModule {
	
}
