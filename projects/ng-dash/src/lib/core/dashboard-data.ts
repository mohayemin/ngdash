import { WidgetData } from './widget-data';

export interface DashboardData {
	widgets: WidgetData[];
	layoutId: string;
	config: any;
}
