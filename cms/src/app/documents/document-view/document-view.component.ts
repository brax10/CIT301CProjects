import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {DocumentsService} from "../documents.service";
import {Router, ActivatedRoute} from "@angular/router";
import {WindRefService} from "../../wind-ref.service";
import { Document } from  "../document"

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  documentIdx: number;
  document: Document;
  nativeWindow: any;

  constructor(private documentsService: DocumentsService,
              private router: Router,
              private route: ActivatedRoute,
              private windRef: WindRefService) {
    this.nativeWindow = this.windRef.getNativeWindow();
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          this.documentIdx = params['idx'];
          this.document = this.documentsService.getDocument(this.documentIdx);
        }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onView() {
    if ( !this.document) {
      return;
    }

    let currentUrl = this.document.url;
    this.nativeWindow.open(currentUrl);
  }

  onDelete() {
    this.documentsService.deleteDocument(this.document);
    this.router.navigate(['documents']);
  }
}
