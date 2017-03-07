import {Routes, RouterModule} from "@angular/router";
import {DocumentsComponent} from "./documents/documents.component";
import {MessagesComponent} from "./messages/messages.component";
import {ContactsComponent} from "./contacts/contacts.component";

const APP_ROUTES: Routes = [
    { path: '', component: DocumentsComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'contacts', component: ContactsComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);