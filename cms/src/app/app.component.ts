import { Component } from '@angular/core';
import {ContactsService} from "./contacts/contacts.service";
import {MessagesService} from "./messages/messages.service";
import {DocumentsService} from "./documents/documents.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContactsService, MessagesService, DocumentsService]
})
export class AppComponent {
  title = 'app works!';
}
