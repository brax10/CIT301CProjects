import { Injectable } from '@angular/core';
import {Message} from "./message";
import { MOCKMESSAGES } from "./MOCKMESSAGES";

@Injectable()
export class MessagesService {
  messages: Message[];

  constructor() { }

  getMessage(idx: number) {
    return this.messages[idx];
  }

  getMessages() {
    // this.mockMessages = this.messages;
  }
}
