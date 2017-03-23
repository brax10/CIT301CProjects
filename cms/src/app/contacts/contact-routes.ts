import {ContactEditComponent} from "./contact-edit/contact-edit.component";
import {ContactsDetailComponent} from "./contacts-detail/contacts-detail.component";
import {Routes} from "@angular/router";

export const CONTACT_ROUTES: Routes = [
    { path: 'new', component: ContactEditComponent },
    { path: ':id/detail', component: ContactsDetailComponent },
    { path: ':id/detail/edit', component: ContactEditComponent }
];