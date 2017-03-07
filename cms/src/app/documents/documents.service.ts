import { Injectable } from '@angular/core';
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";

@Injectable()
export class DocumentsService {
  documents: Document[]=[];
  constructor() { }

  getDocument(idx: number) {
      return this.documents[idx];
  }

  getDocuments() {
    this.documents = MOCKDOCUMENTS;

    return this.documents;
  }

}
