import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDashComponent } from './ng-dash.component';

describe('NgDashComponent', () => {
  let component: NgDashComponent;
  let fixture: ComponentFixture<NgDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
