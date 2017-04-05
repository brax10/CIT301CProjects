import { Injectable } from '@angular/core';
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
import { Document } from  "./document"
import {Subject} from "rxjs";

@Injectable()
export class DocumentsService {

  documentsChanged = new Subject<Document[]>();
  private documents: Document [] = [];

  constructor() { }

  getDocument(idx: number) {
      return this.documents[idx];
  }

  getDocuments() {
    this.documents = MOCKDOCUMENTS;

    return this.documents;
  }

  deleteDocument (document: Document) {
    this.documents.splice(this.documents.indexOf(document), 1);
  }

  addDocument(document: Document) {
    this.documents.push(document);
    this.documentsChanged.next(this.documents.slice());
  }

  updateDocument(oldDoc: Document, newDoc: Document) {
    this.documents[oldDoc.id] = newDoc;
    this.documentsChanged.next(this.documents.slice());
  }
}