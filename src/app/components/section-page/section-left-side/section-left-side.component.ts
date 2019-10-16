import {Component, Input, OnInit} from '@angular/core';
import {TransferDataService} from '../../../services/transfer-data.service';
import {DataField} from '../../../DataField';

@Component({
  selector: 'app-section-left-side',
  templateUrl: './section-left-side.component.html',
  styleUrls: ['./section-left-side.component.css']
})
export class SectionLeftSideComponent implements OnInit {

  pageArea = DataField.pageSection;

  @Input()
  mdArray: Set<string>;

  constructor(
    private transferDataService: TransferDataService,
  ) {
  }

  ngOnInit() {
  }

}
