import { Injectable } from '@angular/core';
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
import { Document } from  "./document"

@Injectable()
export class DocumentsService {
  documents: Document [] = [];
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

}
