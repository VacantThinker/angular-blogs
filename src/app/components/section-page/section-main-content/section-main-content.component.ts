import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SectionSendDataService} from '../../../services/section-send-data.service';
import {IndexLoadMessageService} from '../../../services/index-load-message.service';

@Component({
  selector: 'app-section-main-content',
  templateUrl: './section-main-content.component.html',
  styleUrls: ['./section-main-content.component.scss']
})
export class SectionMainContentComponent implements OnInit, AfterViewInit {
  mdContent: string;

  constructor(
    private indexLoadMessageService: IndexLoadMessageService,
    private sectionSendDataService: SectionSendDataService,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.indexLoadMessageService.updateIsHiddenData(false);
    console.log(`SectionMainContentComponent    \tngAfterViewInit    \twhichOne`);

    this.sectionSendDataService.mdContent$
      .subscribe({
        next: value => {
          this.mdContent = value;
          this.cd.detectChanges();

          this.indexLoadMessageService.updateIsHiddenData(true);
          console.log(`SectionMainContentComponent    \tngAfterViewInit    \tsubscribe    \twhichOne`);
        }
      });
  }
}
