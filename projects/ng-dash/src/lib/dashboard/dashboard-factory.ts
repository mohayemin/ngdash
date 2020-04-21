import { Injectable } from '@angular/core';
import { DashboardData } from './dashboard-data';
import { Dashboard } from './dashboard';
import { WidgetFactory } from '../widget/widget-factory';

@Injectable({
  providedIn: "root"
})
export class DashboardFactory {
  constructor(private widgetFactory: WidgetFactory){

  }
  createFromData(data: DashboardData) {
    let widgets = data.widgets.map(wd => this.widgetFactory.createModel(wd));

    return new Dashboard(
      widgets,
      data.config
    );
  }
}
