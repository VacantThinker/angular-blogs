import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MdSection} from '../../../beans/md-section';
import {SectionSendDataService} from '../../../services/section-send-data.service';
import {SectionHttpDataService} from '../../../services/section-http-data.service';
import {IndexLoadMessageService} from '../../../services/index-load-message.service';

@Component({
  selector: 'app-section-left-side',
  templateUrl: './section-left-side.component.html',
  styleUrls: ['./section-left-side.component.scss'],
})
export class SectionLeftSideComponent implements OnInit, AfterViewInit {

  mdSectionSet: Set<MdSection>;

  constructor(
    private indexLoadMessageService: IndexLoadMessageService,
    private sectionSendDataService: SectionSendDataService,
    private sectionHttpDataService: SectionHttpDataService,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
  }

  mdSectionClick(section: MdSection) {
    this.indexLoadMessageService.updateIsHiddenData(false);
    console.log(`SectionLeftSideComponent    \tmdSectionClick    \twhichOne`);

    const sectName = section.mdSectName;
    if (sectName) {
      this.sectionSendDataService.sendMdSectionData(sectName);
      this.sectionSendDataService.sendMdTitleSetData(null);
      this.sectionSendDataService.sendMdContentData('');

      this.sectionHttpDataService.getMdSectionSet(sectName)
        .subscribe({
            next: value => {
              this.indexLoadMessageService.updateIsHiddenData(false);
              console.log(`SectionLeftSideComponent    \tmdSectionClick    \tsubscribe sendMdTitleSetData()    \twhichOne`);

              this.sectionSendDataService.sendMdTitleSetData(value);
              this.cd.detectChanges();
            },
          }
        );
    }

  }

  ngAfterViewInit(): void {
    this.indexLoadMessageService.updateIsHiddenData(false);
    console.log(`SectionLeftSideComponent    \tngAfterViewInit    \twhichOne`);
    this.sectionSendDataService.mdSectionSet$
      .subscribe({
        next: value => {
          this.mdSectionSet = value;
          this.cd.detectChanges();

          this.indexLoadMessageService.updateIsHiddenData(true);
          console.log(`SectionLeftSideComponent    \tngAfterViewInit    \tsubscribe    \twhichOne`);
        }
      });
  }

}
