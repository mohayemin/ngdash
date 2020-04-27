export interface DashboardData {
	containers: ContainerData[];
	layoutId?: string;
	config?: any;
}

export interface ContainerData {
	index: number;
	widgets: WidgetData[];
}

export interface WidgetData {
	index: number;
	state?: WidgetState;
	ui?: WidgetUi;
	config?: any;
}


export interface WidgetUi {
	widgetId?: string;
	headerId?: string;
	bodyId?: string;
}

export interface WidgetState {
	isDeleted?: boolean;
	isCollapsed?: boolean;
}