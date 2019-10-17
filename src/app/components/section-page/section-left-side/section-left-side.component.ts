import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-left-side',
  templateUrl: './section-left-side.component.html',
  styleUrls: ['./section-left-side.component.css']
})
export class SectionLeftSideComponent implements OnInit {

  @Input()
  pageArea: string;

  @Input()
  mdArray: Set<string>;

  @Input()
  size: number;

  constructor() {
  }

  ngOnInit() {
  }

}
