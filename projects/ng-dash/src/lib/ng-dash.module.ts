import { NgModule } from '@angular/core';
import { NgDashComponent } from './ng-dash.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [NgDashComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgDashComponent]
})
export class NgDashModule { }
