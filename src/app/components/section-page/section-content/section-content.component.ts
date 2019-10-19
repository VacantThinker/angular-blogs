import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.css'],
})
export class SectionContentComponent implements OnInit {

  @Input()
  pageArea: string;

  @Input()
  section: string;

  @Input()
  mdSectionSet: Set<string>;

  @Input()
  mdHtml: string;

  constructor() {
    // if (this.mdSectionSet) {
    //   this.mSet = this.mdSectionSet.mdList;
    // }
  }

  ngOnInit() {
  }

}
