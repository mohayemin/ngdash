import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngdash-demo-custom-body',
  template: `
    This one is a custom body inside default widget
  `,
  styles: [
	  `:host { background-color: lightblue }`
  ]
})
export class CustomBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
