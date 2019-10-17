import {Component, Input, OnInit} from '@angular/core';
import {DataField} from '../../../DataField';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.css']
})
export class SectionContentComponent implements OnInit {

  pageArea = DataField.pageSection;

  @Input()
  section: string;
  @Input()
  mdSectionArray: Set<string>;

  @Input()
  mdContent: string;

  constructor() {
  }

  ngOnInit() {
  }

}
