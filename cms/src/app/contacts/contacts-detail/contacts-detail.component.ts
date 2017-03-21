import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Contact} from "../contact";
import {Subscription} from "rxjs";
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit, OnDestroy {
  @Input() selectedContact: Contact;
  subscription: Subscription;
  contact: Contact;
  contactGroup: Contact[];

  constructor(private contactsService: ContactsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          this.contact.contactId = params['id'];
          this.contact = this.contactsService.getContactById(this.contact.contactId);
          this.contactGroup = this.contact.group;
          this.selectedContact = this.contact;
        }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
