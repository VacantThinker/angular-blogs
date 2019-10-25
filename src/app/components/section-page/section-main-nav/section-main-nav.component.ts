import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SectionSendDataService} from '../../../services/section-send-data.service';
import {DataField} from '../../../data-field';
import {SectionHttpDataService} from '../../../services/section-http-data.service';
import {SectionSendMessageService} from '../../../services/section-send-message.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-section-main-nav',
  templateUrl: './section-main-nav.component.html',
  styleUrls: ['./section-main-nav.component.scss'],
})
export class SectionMainNavComponent implements OnInit {

  mdTitleSet: Set<string>;
  mdSectName: string;

  message: string;

  constructor(
    private sectionSendMessageService: SectionSendMessageService,
    private sectionSendDataService: SectionSendDataService,
    private sectionHttpDataService: SectionHttpDataService,
  ) {
  }

  ngOnInit() {
    this.sectionSendMessageService.message$
      .subscribe({
        next: value => {
          this.message = value;
        }
      });
    this.sectionSendDataService.mdSection$
      .subscribe({
        next: value => {
          this.mdSectName = value;
        }
      });

    this.sectionSendDataService.mdTitleSet$
      .subscribe({
        next: value => {
          this.mdTitleSet = value; // load set
        },
        error: null,
        complete: () => {
          this.message = DataField.messageEmpty; // loading -> ''
        }
      });

  }

  mdTitleClick(mdTitle: string) {
    this.sectionHttpDataService.getMdContent(this.mdSectName, mdTitle)
      .subscribe({
        next: value => {
          this.sectionSendDataService.sendMdContentData(value);
        }
      });
  }
}
