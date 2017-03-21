import { Component, OnInit } from '@angular/core';
import {DocumentsService} from "../documents.service";
import {Document} from "../document"

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document [] = [];

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
    this.documents = this.documentsService.getDocuments();
  }

}
