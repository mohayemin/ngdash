import { NgDashComponent } from '../core/ng-dash-component.decorator';
import { Component } from '@angular/core';

@Component({
	selector: 'test-widget'
})
@NgDashComponent('widget', 'default')
export class TestWidgetComponent {
}