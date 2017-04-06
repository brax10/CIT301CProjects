import { Injectable , EventEmitter} from '@angular/core';
import { Document } from  "./document"
import "rxjs";
import {Headers, Http, Response} from "@angular/http";

@Injectable()
export class DocumentsService {

  private documents: Document [] = [];
  getDocumentsEmitter = new EventEmitter<Document[]>();
  currentDocumentId;
  firebase: string = 'https://brax10cms.firebaseio.com/documents/json';

  constructor(private http: Http ) {
    this.initDocuments();
    this.currentDocumentId = '1';
  }

  initDocuments() {
    return this.http.get(this.firebase)
        .map((response: Response) => response.json())
        .subscribe(
            (data: Document[]) => {
              this.documents = data;
              this.getDocumentsEmitter.emit(this.documents);
            }
        );
  }

  storeDocuments() {
    const body = JSON.stringify(this.documents);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.firebase, body, {headers: headers}).toPromise();
  }

  getDocument(idx: number) {
      return this.documents[idx];
  }

  deleteDocument (document: Document) {
    if (document === null) { return; }

    const pos = this.documents.indexOf(document);
    if(pos < 0) { return; }

    this.documents.splice(pos, 1);
    this.storeDocuments();
  }

  addDocument(document: Document) {
    if (document === null) { return; }
    this.documents.push(document);
    this.storeDocuments();
  }

  updateDocument(oldDoc: Document, newDoc: Document) {
    this.documents[this.documents.indexOf(oldDoc)] = newDoc;
    this.storeDocuments();
  }
}