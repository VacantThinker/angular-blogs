import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {TransferDataService} from '../../../services/transfer-data.service';
import {MdArrayDataService} from '../../../services/md-array-data.service';
import {MdBean} from '../../../beans/md-bean';
import {DataField} from '../../../DataField';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionContentComponent implements OnInit {

  pageArea = DataField.pageSection;

  @Input()
  section: string;
  @Input()
  mdSectionArray: Set<MdBean>;

  @Input()
  mdContent: string;

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
