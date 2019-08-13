import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  imgURL = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  forgot = false;
  title = 'this is book component';
toogleForgot() {
  this.forgot = !this.forgot;
}
  constructor() { }

  ngOnInit() {
  }

}
