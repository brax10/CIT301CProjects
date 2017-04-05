import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {Contact} from "../contact";
import {ContactsService} from "../contacts.service";
import {Router, Route, Params, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact-edit',
  templateUrl: 'contact-edit.component.html',
  styleUrls: ['contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private editMode: boolean = false;
  private hasGroup: boolean = false;
  private contactIdx: number;
  private contact: Contact;
  private groupContacts: Contact[] = [];
  private invalidGroupContact: boolean = true;

  constructor(private contactsService: ContactsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.editMode = false;
    this.hasGroup = false;
    this.invalidGroupContact = false;

    this.route.params.subscribe(
        (params: Params) => {
          this.contactIdx = params['idx'];
          this.contact = this.contactsService.getContact(this.contactIdx);
          this .editMode = true;

          if (this.contact.group != null && this.contact.group.length > 0) {
            this.hasGroup = true;
            this.groupContacts = this.contact.group.slice();
          }

        }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(value) {
    let newContact = new Contact(null, value.name, value.email, value.phone, value.imagePath, this.groupContacts);

    if (this.editMode) {
      newContact.contactId = this.contact.contactId;

      this.contactsService.updateContact(this.contact,newContact);
    }
    else {
      this.contactsService.addContact(this.contact);
    }

    this.router.navigate(['detail']);
  }

  onCancel() {
    this.router.navigate(['detail']);
  }

  isInvalidContact(newContact: Contact) : boolean {
    if (!newContact) return true;

    if (newContact.contactId === this.contact.contactId) return true;

    for (let i = 0; i < this.groupContacts.length; i++) {
      if (newContact.contactId === this.groupContacts[i].contactId)
        return true;
    }

    return false;
  }

  addToGroup($event: any) {
    let selectedContact: Contact = $event.dragData;
    this.invalidGroupContact = this.isInvalidContact(selectedContact);
    if (this.invalidGroupContact) return;

    this.groupContacts.push(selectedContact);
    this.invalidGroupContact = false;
  }

  onRemoveItem(idx: number) {
    if (idx < 0 || idx >= this.groupContacts.length) return;

    this.groupContacts.splice(idx, 1);
    this.invalidGroupContact = false;
  }
}
