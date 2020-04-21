import { Observable, Subject } from 'rxjs';
import { Type } from '@angular/core';
import { WidgetComponent } from './widget.component';

export abstract class Widget {
  constructor(
    public readonly containerId: string,
    public readonly order: number,
    public readonly config: any,
  ){
  }

  load() {
    this.loadData()
      .subscribe(data => this.onLoad.next(data));
  }

  abstract get componentType(): Type<WidgetComponent>;

  protected abstract loadData(): Observable<any>;

  private onLoad = new Subject<any>();
  on = {
    load: this.onLoad.asObservable()
  };
}

