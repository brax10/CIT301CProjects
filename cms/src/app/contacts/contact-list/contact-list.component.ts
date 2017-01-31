import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contact: Contact[] = [];

  Braxton = new Contact('104', 'Braxton', 'brax.ward@gmail.com', '(801) 549-8876', 'C:\Users\BRAX10\Pictures\Braxton Head Shot.jpg', 'personal')
  constructor() { }

  ngOnInit() {
  }

}
