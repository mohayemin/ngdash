import { NgModule } from '@angular/core';
import { NgDashComponent } from './ng-dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { SingleColumnLayoutComponent } from './layout/single-column-layout/single-column-layout.component';
import { NgDashResolver } from './ng-dash-resolver';
import { HtmlWidgetComponent } from './widget/html-widget/html-widget.component';
import { WidgetContainerComponent } from './layout/widget-container/widget-container.component';
import { WidgetWrapperComponent } from './layout/widget-wrapper/widget-wrapper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BootstrapR1C2LayoutComponent } from './layout/layouts/bootstrap-r1-c2-layout.component';
import { DefaultWidgetHeaderComponent } from './layout/default-widget-header/default-widget-header.component';

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
  exports: [NgDashComponent]
})
export class NgDashModule {
  constructor(resolver: NgDashResolver) {
    resolver
      .bindLayout("1", SingleColumnLayoutComponent)
      .bindLayout("bs-r1-c2", BootstrapR1C2LayoutComponent)
      .bindWidget("html", HtmlWidgetComponent);
  }
}
