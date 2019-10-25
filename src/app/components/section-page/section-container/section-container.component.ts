import {Component, OnInit} from '@angular/core';
import {SectionHttpDataService} from '../../../services/section-http-data.service';
import {SectionSendDataService} from '../../../services/section-send-data.service';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.scss'],
})
export class SectionContainerComponent implements OnInit {

  constructor(
    private sectionSendDataService: SectionSendDataService,
    private sectionHttpDataService: SectionHttpDataService,
  ) {
  }

  ngOnInit() {
    this.sectionHttpDataService.getMdBeanSet()
      .subscribe({
        next: value => {
          this.sectionSendDataService.sendMdSectionSetData(value);
        }
      });

  }

}
