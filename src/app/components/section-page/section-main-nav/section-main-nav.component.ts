import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SectionSendDataService} from '../../../services/section-send-data.service';
import {SectionHttpDataService} from '../../../services/section-http-data.service';
import {IndexLoadMessageService} from '../../../services/index-load-message.service';

@Component({
  selector: 'app-section-main-nav',
  templateUrl: './section-main-nav.component.html',
  styleUrls: ['./section-main-nav.component.scss'],
})
export class SectionMainNavComponent implements OnInit, AfterViewInit {

  mdTitleSet: Set<string>;
  mdSectName: string;

  constructor(
    private indexLoadMessageService: IndexLoadMessageService,
    private sectionSendDataService: SectionSendDataService,
    private sectionHttpDataService: SectionHttpDataService,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
  }

  mdTitleClick(mdTitle: string) {
    this.indexLoadMessageService.updateIsHiddenData(false);
    console.log(`SectionMainNavComponent    \tmdTitleClick    \twhichOne`);

    this.sectionHttpDataService.getMdContent(this.mdSectName, mdTitle)
      .subscribe({
        next: value => {
          this.indexLoadMessageService.updateIsHiddenData(false);
          console.log(`SectionMainNavComponent    \tmdTitleClick    \tsubscribe    \twhichOne`);

          this.sectionSendDataService.sendMdContentData(value);
        },
      });
  }

  ngAfterViewInit(): void {
    this.indexLoadMessageService.updateIsHiddenData(false);
    console.log(`SectionMainNavComponent    \tngAfterViewInit    \twhichOne`);

    this.sectionSendDataService.mdSection$
      .subscribe({
        next: value => {
          this.indexLoadMessageService.updateIsHiddenData(true);
          console.log(`SectionMainNavComponent    \tngAfterViewInit    \tsubscribe mdSection$    \twhichOne`);

          this.mdSectName = value;
          this.cd.detectChanges();
        }
      });

    this.sectionSendDataService.mdTitleSet$
      .subscribe({
        next: value => {
          this.indexLoadMessageService.updateIsHiddenData(true);
          console.log(`SectionMainNavComponent    \tngAfterViewInit    \tsubscribe mdTitleSet$    \twhichOne`);

          this.mdTitleSet = value; // load set
          this.cd.detectChanges();
        },
      });

  }
}
