# Ngdash
A dashboard library for Angular 9+.

## Install
`npm i ngdash -s`

**Angular CDK**: The library depends on Angular CDK and will not run without it. If you do not have Angular CDK in your app, install it.  
`npm i @angular/cdk -s`

### Optional Dependencies
1. **Bootstrap CSS**: You need the bootstrap CSS if you want to use the built-in layouts and widgets.   
`npm i bootstrap-css-only -s`  
2. **Font Awesome**: You need to install font-awesome free icons to use the built-in widget header.  
`npm i @fortawesome/fontawesome-free -s`

## Minimal code
The code below will show a dashboard with two widgets.
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
      containers: [{
        widgets: [
          { config: { title: 'A Widget', content: 'The content' } },
          { config: { title: 'Another Widget', content: 'Another content' } }
        ]
      }]
    });
  }
}
```

## Documents and demo
[Detail documents and demo can be found here.](https://mohayemin.github.io/ngdash/)

## Run demo in your local machine
1. Clone the repository
2. CD to the project's root folder
3. Run `ng serve`. The demo project will run.

