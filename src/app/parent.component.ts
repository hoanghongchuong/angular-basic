import {Component, ViewChild} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'app-parent',
  template: `
      <h3>{{value}}</h3>
<!--    <app-child (myClick)="changeValue($event)"></app-child>-->
        <button (click)="onAddForChild()">Add for child</button>
          <app-child></app-child>
  `
})

export class ParentComponent {
  @ViewChild(ChildComponent)
  myChild = ChildComponent;
  onAddForChild() {
    // this.myChild.value++;
  }
}
