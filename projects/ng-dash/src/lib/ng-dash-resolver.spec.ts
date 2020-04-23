import { NgDashResolver } from "./ng-dash-resolver";

describe('NgDashResolver', () => {
	it('dashboard should be created', () => {
		const resolver = new NgDashResolver();
		let dashboard = resolver.createDashboard({
			config: {},
			layoutId: "fourcol",
			widgets: []
		});

		expect(dashboard).toBeDefined();
	});
});

