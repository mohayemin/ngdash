import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'ngdash-four-column-layout',
  template: `
    <div>Four Columns</div>
    <div [widgetContainer]="'1'" class="c1"></div>
    <div [widgetContainer]="'2'" class="c2"></div>
    <div [widgetContainer]="'3'" class="c3"></div>
    <div [widgetContainer]="'4'" class="c4"></div>
  `
})
export class FourColumnLayoutComponent extends LayoutComponent {

}
