import {Injectable, EventEmitter} from '@angular/core';
import {Contact} from "./contact";
import "rxjs";
import {Headers, Http, Response} from "@angular/http";

@Injectable()
export class ContactsService {
  contacts: Contact[] = [];
  currentContact: Contact;
  currentContactId;
  getContactsEmitter = new EventEmitter<Contact[]>();
  firebase: string = 'https://brax10cms-7526b.firebaseio.com/contacts.json';

  constructor(private http: Http) {
    this.initContacts();
    this.currentContactId = '0';
  }

  initContacts() {
    return this.http.get(this.firebase)
        .map((response: Response) => response.json())
        .subscribe(
            (data: Contact[]) => {
              this.contacts = data;
              this.currentContact = this.getContactById("7");
              this.getContactsEmitter.emit(this.contacts);
            }
        );
  }

  storeContacts() {
    const body = JSON.stringify(this.contacts);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.firebase, body, {headers: headers}).toPromise();
  }


  addContact(contact: Contact) {
    if(!contact)
      return;
    this.contacts.push(contact);
    this.contacts = this.contacts.sort(this.compareNames);
    this.storeContacts();
  }

  updateContact(oldContact: Contact, newContact: Contact) {
    if (!oldContact || !newContact) return;

    this.contacts[this.contacts.indexOf(oldContact)] = newContact;
    this.contacts = this.contacts.sort(this.compareNames);
    this.storeContacts();

  }

  deleteContact(contact: Contact) {
    if (!contact) return;

    const pos = this.contacts.indexOf(contact);
    if(pos < 0) return;

    this.contacts.splice(pos, 1);
    this.contacts = this.contacts.sort(this.compareNames);
    this.storeContacts();
  }

  getCurrentContact() {
    return this.currentContact;
  }

  getContact(idx: number) {
      return this.contacts[idx];
  }

  getContactById(id: string) {
    return this.contacts.find((contact: Contact) => contact.id == id);
  }

  compareNames(contactA: Contact, contactB: Contact) {

    if (contactA.name < contactB.name)
      return -1;
    if (contactA.name > contactB.name)
      return 1;
    return 0;

  }
}
