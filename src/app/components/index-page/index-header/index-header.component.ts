import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.css']
})
export class IndexHeaderComponent implements OnInit {
  headImageUrl = 'https://raw.githubusercontent.com/vt-server-data/angular-blog-data/master/image/headimage/50100840.png';

  constructor() {
  }

  ngOnInit() {
  }

}
