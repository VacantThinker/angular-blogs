import {Component, OnDestroy, OnInit} from '@angular/core';
import {MdSection} from '../../../beans/md-section';
import {SectionSendDataService} from '../../../services/section-send-data.service';
import {SectionHttpDataService} from '../../../services/section-http-data.service';
import {DataField} from '../../../data-field';
import {SectionSendMessageService} from '../../../services/section-send-message.service';

@Component({
  selector: 'app-section-left-side',
  templateUrl: './section-left-side.component.html',
  styleUrls: ['./section-left-side.component.scss'],
})
export class SectionLeftSideComponent implements OnInit {

  mdSectionSet: Set<MdSection>;

  constructor(
    private sectionSendMessageService: SectionSendMessageService,
    private sectionSendDataService: SectionSendDataService,
    private sectionHttpDataService: SectionHttpDataService,
  ) {
  }

  ngOnInit() {
    this.sectionSendDataService.mdSectionSet$
      .subscribe({
        next: value => {
          this.mdSectionSet = value;
        }
      });
  }

  mdSectionClick(section: MdSection) {
    this.sectionSendMessageService.sendMessageData(DataField.messageLoading);

    const sectName = section.mdSectName;
    if (sectName) {
      this.sectionSendDataService.sendMdSectionData(sectName);
      this.sectionSendDataService.sendMdTitleSetData(null);
      this.sectionSendDataService.sendMdContentData('');

      this.sectionHttpDataService.getMdSectionSet(sectName)
        .subscribe({
            next: value => {
              this.sectionSendDataService.sendMdTitleSetData(value);
            }
          }
        );
    }

  }

}
