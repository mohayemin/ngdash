import { NgModule } from '@angular/core';
import { NgDashComponent } from './ng-dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { SingleColumnLayoutComponent } from './layout/single-column-layout/single-column-layout.component';
import { NgDashResolver } from './ng-dash-resolver';
import { HtmlWidgetComponent } from './widget/html-widget/html-widget.component';
import { WidgetContainerComponent } from './layout/widget-container/widget-container.component';
import { WidgetWrapperComponent } from './layout/widget-wrapper/widget-wrapper.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BootstrapR1C2Component } from './layouts/bootstrap-r1-c2.component';

@NgModule({
  declarations: [
    NgDashComponent,
    SingleColumnLayoutComponent,
    HtmlWidgetComponent,
    WidgetContainerComponent,
    WidgetWrapperComponent,
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
      .bindWidget("html", HtmlWidgetComponent);
  }
}
