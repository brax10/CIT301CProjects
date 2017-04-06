import {Injectable, EventEmitter} from '@angular/core';
import {Message} from "./message";
import {MOCKMESSAGES} from "./MOCKMESSAGES";
import {Headers, Http, Response} from "@angular/http";
import "rxjs";


@Injectable()
export class MessagesService {
  private messages: Message[] = [];
  getMessagesEmitter = new EventEmitter<Message[]>();
  firebase: string = 'https://brax10cms.firebaseio.com/messages/json';
  currentMessageId;

  constructor(private http: Http) {
    this.initMessages();
    this.currentMessageId = '1';
  }

  initMessages() {
    return this.http.get(this.firebase)
        .map((response: Response) => response.json())
        .subscribe(
            (data: Message[]) => {
              this.messages = data;
              this.getMessagesEmitter.emit(this.messages);
            }
        );
  }

  storeMessages() {
    const body = JSON.stringify(this.messages);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.firebase, body, {headers: headers}).toPromise();
  }

  getMessage(idx: number) {
    return this.messages[idx];
  }

  getMessages() {
    this.messages = MOCKMESSAGES;

    return this.messages;
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.storeMessages();
  }
}
