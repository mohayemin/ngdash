# Ngdash
A dashboard library for Angular 9+. Some demo can be found [here](https://mohayemin.github.io/ngdash/).

## Install
`npm i ngdash -s`

**Angular CDK**: The library depends on Angular CDK and will not run without it. If you do not have Angular CDK in your app, install it.  
`npm i @angular/cdk -s`

### Optional Dependencies
1. **Bootstrap CSS**: You need the bootstrap CSS if you want to use the built-in layouts and widgets.  
`npm i bootstrap-css-only -s`  
2. **Font Awesome**: You need to install font-awesome free icons to use the built-in widget header.  
`npm i @fortawesome/fontawesome-free -s`

## Code and Concepts
### Creating a dashboard

```typescript
import { Component } from '@angular/core';
import { Dashboard } from 'ngdash'

@Component({
  selector: 'app-root',
  template: '<ngdash [dashboard]="dashboad"></ngdash>',
})
export class AppComponent {
  dashboad: Dashboard;
  constructor() {
    this.dashboad = new Dashboard({
			containers: [
				{ // Container 1
					widgets: [
						{ // Widget 1.1
							config: { 
								title: 'using default widget', 
								content: 'no custom header or body is used here' 
							} 
						},
						{ // Widget 1.2
							config: { 
								title: 'another default widget', 
								content: 'With <i>different</i> content' 
							} 
						}
					]
				},
				{ // Container 2
					widgets: [
						{ // Widget 2.1
							ui: { headerComponentId: 'custom-header' }, 
							config: { content: 'custom header, but the content is default' } 
						},
						{ // Widget 2.2
							ui: { bodyComponentId: 'custom-body' }, 
							config: { title: 'using custom widget body, but default component with default header' } 
						},
						{ // Widget 2.3
							ui: { 
								headerComponentId: 'custom-header', 
								bodyComponentId: 'custom-body' 
							}, 
						},
						{ // Widget 2.4
							ui: { widgetComponentId: 'custom-component' }, 
							config: { title: 'using custom widget' } 
						}
					]
				}
			]
		});
  }
}
```

The code above will display a dashboard with the default layout (discussed below) and several default and custom widgets (discussed below).

### The dashboard components
#### Widget
Widget is a ui Component that can be placed in a position of the dashbaord. Depending on the dashboard setup, a widget can be collapsed, removed and moved around different places within the dashboard. This is likely that the users will create many different widgets for their application.  
A widget built with [Bootstrap Card](https://getbootstrap.com/docs/4.4/components/card/) is given in the box. The user can use one of the following options.  

1. Use the built in widget with your desired body and header html. See widget 1.1 and 1.2 above for example.
2. Use the built in widget, but with custom components for header or body or both. See widgets 2.1, 2.2 and 2.3 above.
3. Use a custom widget component.

The components with ids must be registered to the system before using. The folliwing code will register the widgets. The preferable place to register the widgets is `AppModule`'s constructor.

```ts
export class AppModule {
	constructor(resolver: NgdashResolver) {
		resolver
			.bind(CustomWidgetComponent, 'widget', 'custom-widget')
			.bind(CustomHeaderComponent, 'widget-header', 'custom-header')
			.bind(CustomBodyComponent, 'widget-body', 'custom-body')
		;
	}
}
```

If you want to configure your own default widget, use 'default' as the third parameter of the `bind` method. For example, the following code will replace the built-in default header component with `MyDefaultHeader` component.  

```ts
resolver.bind(MyDefaultHeader, 'widget-header', 'default');
```

Any custom widget, widget header and widget body component will recieve a `widget: Widget` object, a `component: WidgetComponent` object and a `dashboard: Dashboard` object. You can use these objects to implement your custom component. 

#### Layout
The dashboard is is organized in a layout which can be customized. The library comes with several layouts built with [Bootstrap Grid system](https://getbootstrap.com/docs/4.4/layout/grid/). The default is a simple two column layout. The code below uses another built in layout instead of the default one.

```ts
this.dashboad = new Dashboard({
	layoutId: 'ngdash-bootstrap-r2-c2-layout'
});
```

You can create custom layouts and use them in your app. A layout is just an Angular component that has one or more `ngdash-widget-container` components. `ngdash-widget-container` requires a `container: WidgetContainer` input and optionally require a `dashboard: Dashboard` input. If the `dashboard` input is not supplied. Some options will not be available. Below is the code of the built-in two-column layout.

**Template:**
```html
    <div class="row">
      <div class="col-sm">
		<ngdash-widget-container 
			[container]="containers[0]" 
			[dashboard]="dashboard">
		</ngdash-widget-container>
      </div>
      <div class="col-sm">
		<ngdash-widget-container 
			[container]="containers[1]" 
			[dashboard]="dashboard">
		</ngdash-widget-container>
      </div>
    </div>
```

**Backend:**
```ts
export class BootstrapR1C2LayoutComponent {
	@Input() dashboard: Dashboard;
	containers: WidgetContainer[];
	
	ngOnInit() {
		this.containers = [
			this.dashboard.getContainer(0),
			this.dashboard.getContainer(1),
		];
	}
}
```

Note that, in usual use cases, you will not have to use the layout component explicitly. `ngdash` component will render it in the runtime based on setting in the dashboard object. 

To use a custom layout, you need to register it in your app as below:
```ts
export class AppModule {
	constructor(resolver: NgdashResolver) {
		resolver.bind(CustomWidgetComponent, 'layout', 'a-custom-layout');
	}
}
```

## Run demo locally
To run the demo in your local machine.
1. Clone the repository
2. CD to the project's root folder
3. Run `ng serve`. The demo project will run.
