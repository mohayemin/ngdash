import { Component, OnInit } from '@angular/core';
import { NgDashComponent } from 'projects/ng-dash/src/lib/core/ng-dash-component.decorator';

@Component({
  selector: 'ng-dash-demo-custom-header',
  template: `
    This one is a custom header inside default widget
  `,
  styles: [
  ]
})
@NgDashComponent('widget-header', 'custom')
export class CustomHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
