export interface WidgetData {
	state: WidgetState;
	ui?: WidgetUi;
	config?: any;
}


export interface WidgetUi {
	widgetId?: string;
	headerId?: string;
	bodyId?: string;
}

export interface WidgetState {
	containerId: number;
	index: number;
	isDeleted?: boolean;
	isCollapsed?: boolean;
}