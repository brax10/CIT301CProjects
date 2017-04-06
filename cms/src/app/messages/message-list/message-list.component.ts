import {Component, OnInit, OnDestroy} from '@angular/core';
import {Message} from "../message";
import {MessagesService} from "../messages.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {
  messages: Message[] = [];
  subscription: Subscription;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.subscription = this.messagesService.getMessagesEmitter.subscribe(
        (message: Message[]) => this.messages = message);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
