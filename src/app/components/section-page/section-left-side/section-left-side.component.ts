import {Component, Input, OnInit} from '@angular/core';
import {MdSection} from '../../../beans/md-section';

@Component({
  selector: 'app-section-left-side',
  templateUrl: './section-left-side.component.html',
  styleUrls: ['./section-left-side.component.css'],
})
export class SectionLeftSideComponent implements OnInit {

  @Input()
  pageArea: string;

  @Input()
  mdBeanSet: Set<MdSection>;

  constructor() {
    // if (this.mdBeanSet) {
    //   this.mSet = this.mdBeanSet.mdBeanSet;
    // }
  }

  ngOnInit() {
  }

}
