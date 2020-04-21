import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourColumnLayoutComponent } from './four-column-layout.component';

describe('FourColumnLayoutComponent', () => {
  let component: FourColumnLayoutComponent;
  let fixture: ComponentFixture<FourColumnLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourColumnLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourColumnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
