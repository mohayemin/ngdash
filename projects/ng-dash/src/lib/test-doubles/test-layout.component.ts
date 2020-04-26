import { NgDashComponent } from '../core/ng-dash-component.decorator';
import { Component } from '@angular/core';

@Component({
	selector: 'test-layout'
})
@NgDashComponent('layout', 'default')
export class TestLayoutComponent {
}