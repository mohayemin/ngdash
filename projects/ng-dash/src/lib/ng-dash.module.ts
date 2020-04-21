import { NgModule } from '@angular/core';
import { NgDashComponent } from './ng-dash.component';
import { BrowserModule } from '@angular/platform-browser';
import { WidgetContainerDirective } from './layout/widget-container.directive';

@NgModule({
  declarations: [NgDashComponent, WidgetContainerDirective],
  imports: [
    BrowserModule
  ],
  exports: [NgDashComponent]
})
export class NgDashModule { }
