import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {DocumentsService} from "../documents.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import { Document } from  "../document";

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  oldDocument: Document;
  editMode: boolean = false;
  documentId: number;

  constructor(private documentsService: DocumentsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this.documentId = params['id'];

          if(this.documentId != null) {
            this.editMode = true;
            this.oldDocument = this.documentsService.getDocument(this.documentId);
          } else {
            this.editMode = false;
          }
        }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(value) {
    let newDocument = new Document(null, value.name, value.description, value.url);

    if (this.editMode) {
      newDocument.id = this.oldDocument.id;
      this.documentsService.updateDocument(this.oldDocument, newDocument);
    } else {
      this.documentsService.addDocument(newDocument);
    }

    this.router.navigate(['documents']);
  }

  onCancel() {
    this.router.navigate(['documents']);
  }
}
