import { NgModule } from '@angular/core';
import { NgDashComponent } from './ng-dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetContainerDirective } from './layout/widget-container.directive';
import { SingleColumnLayoutComponent } from './layout/single-column-layout/single-column-layout.component';
import { NgDashResolver } from './ng-dash-resolver';
import { HtmlWidgetComponent } from './widget/html-widget/html-widget.component';
import { HtmlWidget } from './widget/html-widget/html-widget';

@NgModule({
  declarations: [
    NgDashComponent,
    WidgetContainerDirective,
    SingleColumnLayoutComponent,
    HtmlWidgetComponent
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
