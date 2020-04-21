import { NgDashResolver } from "./ng-dash-resolver";
import { FourColumnLayoutComponent } from './test-doubles/four-column-layout/four-column-layout.component';

describe('NgDashResolver', () => {
  it('dashboard should be created', () => {
    const resolver = new NgDashResolver();
    let dashboard = resolver.createDashboard({
      config: {},
      layoutType: "fourcol",
      widgets: []
    });

    expect(dashboard).toBeDefined();
  });

  it('should create leyout type', () => {
    const resolver = new NgDashResolver();
    let dashboard = resolver.bindLayout("fourcol", FourColumnLayoutComponent).createDashboard({
      config: {},
      layoutType: "fourcol",
      widgets: []
    });

    expect(dashboard.layout).toBe(FourColumnLayoutComponent);
  });
});

