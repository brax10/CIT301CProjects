import { Component, OnInit } from '@angular/core';
import {Contact} from "../../contacts/contact";

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {
  sender: Contact;

  constructor() { }

  ngOnInit() {
  }

}
