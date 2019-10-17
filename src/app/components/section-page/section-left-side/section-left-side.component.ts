import {Component, Input, OnInit} from '@angular/core';
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

  @Input()
  size: number;

  constructor() {
  }

  ngOnInit() {
  }

}
