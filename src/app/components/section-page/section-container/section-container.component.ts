import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SectionHttpDataService} from '../../../services/section-http-data.service';
import {SectionSendDataService} from '../../../services/section-send-data.service';
import {IndexLoadMessageService} from '../../../services/index-load-message.service';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss'],
})
export class SectionContainerComponent implements OnInit, AfterViewInit {

  constructor(
    private indexLoadMessageService: IndexLoadMessageService,
    private sectionSendDataService: SectionSendDataService,
    private sectionHttpDataService: SectionHttpDataService,
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.indexLoadMessageService.updateIsHiddenData(false);
    console.log(`SectionContainerComponent    \tngAfterViewInit    \twhichOne`);

    this.sectionHttpDataService.getMdBeanSet()
      .subscribe({
        next: value => {
          this.sectionSendDataService.sendMdSectionSetData(value);
          this.indexLoadMessageService.updateIsHiddenData(true);
          console.log(`SectionContainerComponent    \tngAfterViewInit    \tsubscribe    \twhichOne`);
        },
      });
  }

}
