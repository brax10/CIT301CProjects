import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Contact} from "../contact";
import {ContactsService} from "../contacts.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {

  @Output() selectedContact = new EventEmitter<Contact>();
  contacts: Contact[] = [];
  term: string;

  constructor(private contactService: ContactsService) {
  }

  ngOnInit() {
    this.contactService.getContactsEmitter.subscribe(
        (contact: Contact[]) => this.contacts = contact);
  }

  onKeyPress(value: string) {
    this.term = value;
  }
}




