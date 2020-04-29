import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoWidgetComponent } from './demo/demo-widget.component';
import { CustomHeaderComponent } from './demo/custom-header.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routes';
import { DemoComponent } from './demo/demo.component';
import { NgDashModule } from 'projects/ng-dash/src/public-api';
import { NgDashResolver } from 'projects/ng-dash/src/lib/core/ng-dash-resolver';

@NgModule({
	declarations: [
		AppComponent,
		DemoWidgetComponent,
		CustomHeaderComponent,
		DemoComponent
	],
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule,
		FormsModule,
		NgDashModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(resolver: NgDashResolver) {
		resolver
			.bind(DemoWidgetComponent, 'widget', 'demo')
			.bind(CustomHeaderComponent, 'widget-header', 'custom')
		;
	}
}
