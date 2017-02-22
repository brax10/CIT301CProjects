import { Injectable } from '@angular/core';
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";

@Injectable()
export class DocumentsService {
  document: Document[]=[];
  constructor() { }

  getDocument(idx: number) {
      return this.document[idx];
  }

  getDocuments() {
    this.document = MOCKDOCUMENTS;
  }

}
