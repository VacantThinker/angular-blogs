import {Component, OnInit} from '@angular/core';
import {MdDataService} from '../../../services/md-data.service';
import {TransferDataService} from '../../../services/transfer-data.service';

@Component({
  selector: 'app-sort-left-side',
  templateUrl: './sort-left-side.component.html',
  styleUrls: ['./sort-left-side.component.css']
})
export class SortLeftSideComponent implements OnInit {

  // prefixStr = 'https://raw.githubusercontent.com/vt-angular/angular-blogs-data/master/contents/';
  // template3Str = 'https://raw.githubusercontent.com/vt-angular/angular-blogs-data/master/contents/angular/angular-global-css-styles.md';
  //
  // templateStr = 'https://raw.githubusercontent.com/vt-angular/angular-blogs-data/master/json_/md_array.json';
  // template2Str = 'https://raw.githubusercontent.com/vt-angular/angular-blogs-data/master/json_/md_array/angular.json';
  //
  // dictStr = '';
  // titleStr = '';
  //
  // fullMdUrl = this.prefixStr + this.dictStr + this.titleStr;

  sideList: Array<string>;

  constructor(
    private mdDataService: MdDataService,
    private transferDataService: TransferDataService,
  ) {
  }

  ngOnInit() {
    this.mdDataService.getSideList().subscribe(x => {
      this.sideList = x;
    });
  }

  private sendDataToContent(data: string) {
    console.log('sendDataToContent(data: string) ===' + data);
    this.transferDataService.tranferData(data);
  }

}
