import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDashComponent } from './ng-dash.component';
import { TextWidget } from '../test-doubles/text-widget';
import { BrowserModule } from '@angular/platform-browser';
import { NgDashResolver } from './ng-dash-resolver';

describe('NgDashComponent', () => {
  let component: NgDashComponent;
  let fixture: ComponentFixture<NgDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgDashComponent],
      imports: [BrowserModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDashComponent);
    let resolver = TestBed.inject(NgDashResolver);
    resolver.bindWidget("text", TextWidget);
    component = fixture.componentInstance;

    component.data = {
      config: {},
      widgets: [
        { type: "text", containerId: "", order: 1, config: { text: "first one" } }
        , { type: "text", containerId: "", order: 1, config: { text: "the second" } }
      ]
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
