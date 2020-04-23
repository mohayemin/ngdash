import { WidgetData } from '../widget/widget-data';

export interface DashboardData {
	widgets: WidgetData[];
	layoutId: string;
	config: any;
}
