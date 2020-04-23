import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgDashModule } from 'projects/ng-dash/src/public-api';
import { DemoWidgetComponent } from './demo-widget.component';

@NgModule({
	declarations: [
		AppComponent,
		DemoWidgetComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		NgDashModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
