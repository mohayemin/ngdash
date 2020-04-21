import { Input } from '@angular/core';
import { Dashboard } from '../dashboard/dashboard';

export abstract class LayoutComponent {
  @Input() dashboard: Dashboard;
}
