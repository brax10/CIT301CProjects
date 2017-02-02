import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  @Output() contactSelected: EventEmitter<Contact> = new EventEmitter();
  contact = new Contact('104', 'Braxton', 'brax.ward@gmail.com', '(801) 549-8876', 'https://placehold.it/140x100', 'personal')

  constructor() { }

  ngOnInit() {
  }

  onSelected(contact: Contact) {
    console.log(contact)
    this.contactSelected.emit(contact);
  }
}
