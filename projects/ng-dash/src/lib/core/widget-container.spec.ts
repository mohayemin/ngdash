import { WidgetContainer } from './widget-container';
import { Widget } from './widget';

describe('WidgetContainer', () => {
	it('should create an instance', () => {
		expect(new WidgetContainer(0, [])).toBeTruthy();
	});

	it('should keep the widgets sorted', () => {
		const widgetContainer = new WidgetContainer(0, [
			new Widget({ state: { containerId: 0, index: 1 } }),
			new Widget({ state: { containerId: 0, index: 0 } }),
		]);

		expect(widgetContainer.widgets[0].state.index).toBe(0);
		expect(widgetContainer.widgets[1].state.index).toBe(1);
	});
});
