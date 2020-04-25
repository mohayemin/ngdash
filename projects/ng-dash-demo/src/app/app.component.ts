import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Dashboard, Widget } from 'projects/ng-dash/src/public-api';
import { WidgetMoveEvent } from 'projects/ng-dash/src/lib/core/widget-move-event';

@Component({
	selector: 'ng-dash-demo-root',
	template: `
    <div class="container">
      <h1>ng-dash Demo</h1>
      <div>
        <label>
          <input type="checkbox" [(ngModel)]="enableDragDrop"/> Enable Drag Drop
        </label>
      </div>
      <ngdash [dashboard]="dashboard"
        (moveWidget)="widgetMoved($event)"
        (removeWidget)="widgetRemoved($event)"
        [enableDragDrop]="enableDragDrop"></ngdash>

      <div class="alert alert-info mt-3">
        <h4>Interactions</h4>
        <ul>
          <li *ngFor="let message of messages">{{message}}</li>
        </ul>
      </div>
    </div>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
	enableDragDrop: boolean = true;
	dashboard: Dashboard;

	messages: string[] = [];
	constructor() {
		this.dashboard = new Dashboard(
			[
				new Widget({ containerId: 0, index: 0 }, { title: 'using default widget' }),
				new Widget({ containerId: 0, index: 1 }, { title: 'using custom widget' }, 'demo'),
				new Widget({ containerId: 1, index: 0 }, { headerId: 'custom', content: 'content' })
			],
			'ngdash-bootstrap-r1-c2-layout',
			{}
		)
	}

	widgetMoved(event: WidgetMoveEvent) {
		const num = this.messages.length + 1;
		if (event.widget.state.containerId === event.previousPosition.containerId) {
			this.messages.unshift(`${num}: Widget moved within same container`);
		} else {
			this.messages.unshift(`${num}: Widget moved between containers`);
		}
	}

	widgetRemoved(widget: Widget) {
		const num = this.messages.length + 1;
		this.messages.unshift(`${num}: Widget removed`);
	}
}
