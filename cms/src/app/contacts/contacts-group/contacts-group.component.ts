import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Contact} from "../contact";

@Component({
  selector: 'app-contacts-group',
  templateUrl: './contacts-group.component.html',
  styleUrls: ['./contacts-group.component.css']
})
export class ContactsGroupComponent implements OnChanges {
  @Input() selectedContact: Contact
  groupContacts : Contact[] = [];

  constructor() { }

  ngOnChanges() {
    this.groupContacts = this.selectedContact.group;
  }
}
