import { Component, OnInit, Input } from '@angular/core';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'ngdash-ng-dash',
  template: `
    <p *ngFor="let widget of dashboard.widgets">
      {{widget.config.text}}
    </p>
  `,
  styles: [
  ]
})
export class NgDashComponent implements OnInit {
  @Input() dashboard: Dashboard;
  constructor() { }

  ngOnInit(): void {
  }

}
