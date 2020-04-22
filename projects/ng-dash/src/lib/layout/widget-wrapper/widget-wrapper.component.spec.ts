import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWrapperComponent } from './widget-wrapper.component';
import { Widget } from '../../widget/widget';
import { TextWidgetComponent } from '../../test-doubles/text-widget/text-widget.component';

describe('WidgetWrapperComponent', () => {
  let component: WidgetWrapperComponent;
  let fixture: ComponentFixture<WidgetWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetWrapperComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetWrapperComponent);
    component = fixture.componentInstance;
    component.widget = new Widget(0, 0, { text: "here I am" }, TextWidgetComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
