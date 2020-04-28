import { WidgetContainer } from './widget-container';

describe('WidgetContainer', () => {
	it('should create an instance', () => {
		expect(new WidgetContainer({ widgets: [] })).toBeTruthy();
	});
});
