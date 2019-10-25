import {Component, OnInit} from '@angular/core';
import {SectionSendDataService} from '../../../services/section-send-data.service';
import {DataField} from '../../../data-field';

@Component({
  selector: 'app-section-main-content',
  templateUrl: './section-main-content.component.html',
  styleUrls: ['./section-main-content.component.scss']
})
export class SectionMainContentComponent implements OnInit {
  mdContent: string;

  constructor(
    private sectionSendDataService: SectionSendDataService,
  ) {
  }

  ngOnInit() {
    this.sectionSendDataService.mdContent$
      .subscribe({
        next: value => {
          this.mdContent = value;
        }
      });
  }

}
