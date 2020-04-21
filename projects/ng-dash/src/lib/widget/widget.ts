import { Observable, Subject } from 'rxjs';

export abstract class Widget {
  constructor(
    public readonly id: string,
    public readonly containerId: string,
    public readonly order: number,
    public readonly config: any,
  ){
  }

  load() {
    this.loadData()
      .subscribe(data => this.onLoad.next(data));
  }

  protected abstract loadData(): Observable<any>;

  private onLoad = new Subject<any>();
  on = {
    load: this.onLoad.asObservable()
  };
}

