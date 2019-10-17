import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.css']
})
export class SectionContentComponent implements OnInit {

  @Input()
  pageArea: string;

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
