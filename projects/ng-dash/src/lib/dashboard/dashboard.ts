import { Widget } from '../widget/widget';

export class Dashboard {
  constructor(
    public widgets: Widget[],
    public config: any
  ) {
  }
}
