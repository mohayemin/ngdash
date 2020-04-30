import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngdash-demo-custom-header',
  template: `
    This one is a custom header inside default widget
  `,
  styles: [
	  `:host { background-color: lightpink }`
  ]
})
export class CustomHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
