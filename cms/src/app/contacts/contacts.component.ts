import { Component, OnInit, OnChanges } from '@angular/core';
import {Contact} from "./contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact: Contact;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.contact);
  }
}
