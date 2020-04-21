import { Layout } from './layout';
import { Widget } from './widget/widget';

export class Dashboard {
	id: string;
  name: string;
  layout: Layout;
  widgets: Widget[];
}
