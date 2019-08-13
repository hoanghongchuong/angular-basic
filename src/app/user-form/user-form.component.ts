import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  eventStyle = { color: 'red', fontSize: '30px'};
  oddStyle = { color: 'blue', fontSize: '10px'};
  isHighlight = true;
  currentClass = { circle: !this.isHighlight, square: this.isHighlight};
  constructor() { }

  ngOnInit() {


  }
}
