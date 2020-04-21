import { WidgetData } from '../widget/widget-data';

export interface DashboardData {
  widgets: WidgetData[];
  layoutType: string;
  config: any;
}
