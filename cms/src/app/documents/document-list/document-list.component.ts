import {Component, OnInit, OnDestroy} from '@angular/core';
import {DocumentsService} from "../documents.service";
import {Document} from "../document"
import {Subscription} from "rxjs";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Document [] = [];
  subscription: Subscription;

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
    this.subscription = this.documentsService.getDocumentsEmitter.subscribe(
        (document: Document[]) => this.documents = document);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
