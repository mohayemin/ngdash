import { NgModule } from '@angular/core';
import { NgDashComponent } from './ng-dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { SingleColumnLayoutComponent } from './layout/single-column-layout/single-column-layout.component';
import { NgDashResolver } from './ng-dash-resolver';
import { HtmlWidgetComponent } from './widget/html-widget/html-widget.component';
import { HtmlWidget } from './widget/html-widget/html-widget';
import { WidgetContainerComponent } from './layout/widget-container/widget-container.component';
import { WidgetWrapperComponent } from './layout/widget-wrapper/widget-wrapper.component';

@NgModule({
  declarations: [
    NgDashComponent,
    SingleColumnLayoutComponent,
    HtmlWidgetComponent,
    WidgetContainerComponent,
    WidgetWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [NgDashComponent]
})
export class NgDashModule {
  constructor(resolver: NgDashResolver) {
    resolver
      .bindLayout("single", SingleColumnLayoutComponent)
      .bindWidget("html", HtmlWidget);
  }
}
