import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ComponentFactoryResolver,
  ChangeDetectionStrategy
} from '@angular/core';
import { Widget } from '../../widget/widget';

@Component({
  selector: 'ngdash-widget-wrapper',
  template: `
    <div class="ngdash-widget-wrapper">
      <ng-template #widget></ng-template>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WidgetWrapperComponent implements AfterViewInit {
  @Input() widget: Widget;
  @ViewChild("widget", { read: ViewContainerRef }) widgetVCR: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit() {
    this.renderWidget();
  }

  renderWidget() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.widget.componentType);
    const component = this.widgetVCR.createComponent(factory);
    component.instance.widget = this.widget;
    component.changeDetectorRef.detectChanges();
  }
}
