import {Routes, RouterModule} from "@angular/router";
import {DocumentsComponent} from "./documents/documents.component";
import {MessagesComponent} from "./messages/messages.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {MESSAGE_ROUTES} from "./messages/message-routes";

const APP_ROUTES: Routes = [
    { path: '', component: DocumentsComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'messages', component: MessagesComponent, children: MESSAGE_ROUTES},
    { path: 'contacts', component: ContactsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);