import { Id } from '../utils/types';

export interface DashboardData {
	/**
	 * The widget containers in the dashboard
	 */
	containers: ContainerData[];
	/**
	 * Id of the layout for the dashboard. Default layout is considered if omitted
	 */
	layoutId?: Id;
	/**
	 * Any aditional configs. Not used by the framework but can be useful for custom components/layouts.
	 */
	config?: any;
}

export interface ContainerData {
	uniqueId?: Id;
	widgets: WidgetData[];
}

export interface WidgetData {
	uniqueId?: Id;
	state?: WidgetState;
	ui?: WidgetUi;
	config?: any;
}

export interface WidgetUi {
	widgetComponentId?: Id;
	headerComponentId?: Id;
	bodyComponentId?: Id;
}

export interface WidgetState {
	isDeleted?: boolean;
	isCollapsed?: boolean;
}