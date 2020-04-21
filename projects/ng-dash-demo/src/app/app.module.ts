import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgDashModule } from 'projects/ng-dash/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDashModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
