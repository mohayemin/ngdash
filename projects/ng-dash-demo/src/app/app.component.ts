import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'ng-dash-demo-root',
	templateUrl: 'app.component.html',
	styles: [ 
		`main { padding-top: 5rem; }`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	showNav: boolean;
}
