import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts = [
    {id: 1, name: 'name-1', phone: '09821'},
    {id: 2, name: 'name-2', phone: '09822'},
    {id: 3, name: 'name-3', phone: '09823'},
    {id: 4, name: 'name-4', phone: '09824'},
    {id: 5, name: 'name-5', phone: '09825'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
