import { Component, OnInit } from '@angular/core';
import { NgDashComponent } from 'projects/ng-dash/src/public-api';

@Component({
  selector: 'ng-dash-demo-custom-header',
  template: `
    This one is a custom header inside default widget
  `,
  styles: [
	  `:host { background-color: lightpink }`
  ]
})
@NgDashComponent('widget-header', 'custom')
export class CustomHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
