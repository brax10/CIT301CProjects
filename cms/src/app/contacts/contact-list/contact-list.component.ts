import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {Contact} from "../contact";
import {ContactsService} from "../contacts.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit, OnDestroy {

  @Output() selectedContact = new EventEmitter<Contact>();
  contacts: Contact[] = [];
  term: string;
  subscription: Subscription;

  constructor(private contactService: ContactsService) {
  }

  ngOnInit() {
    this.subscription = this.contactService.getContactsEmitter.subscribe(
        (contact: Contact[]) => this.contacts = contact);
  }

  onKeyPress(value: string) {
    this.term = value;
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}




