import { Observable, Subject } from 'rxjs';

export abstract class Widget {
  id: string;
  name: string;
  containerId: string;
  order: number;
  config: any;

  load() {
    this.loadData()
      .subscribe(data => this.onLoad.next(data));
  }

  abstract loadData(): Observable<any>;

  private onLoad = new Subject<any>();
  on = {
    load: this.onLoad.asObservable()
  };
}

