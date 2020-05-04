import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomWidgetComponent } from './demo/custom-widget.component';
import { CustomHeaderComponent } from './demo/custom-header.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routes';
import { DemoComponent } from './demo/demo.component';
import { NgdashModule } from 'projects/ngdash/src/public-api';
import { NgdashResolver } from 'projects/ngdash/src/lib/core/ngdash-resolver';
import { CustomBodyComponent } from './demo/custom-body.component';

@NgModule({
	declarations: [
		AppComponent,
		CustomWidgetComponent,
		CustomHeaderComponent,
		DemoComponent
	],
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule,
		FormsModule,
		NgdashModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(resolver: NgdashResolver) {
		resolver
			.bind(CustomWidgetComponent, 'widget', 'custom-widget')
			.bind(CustomHeaderComponent, 'widget-header', 'custom-header')
			.bind(CustomBodyComponent, 'widget-body', 'custom-body')
		;
	}
}
