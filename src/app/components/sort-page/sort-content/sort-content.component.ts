import {Component, OnInit} from '@angular/core';
import {TransferDataService} from '../../../services/transfer-data.service';

@Component({
  selector: 'app-sort-content',
  templateUrl: './sort-content.component.html',
  styleUrls: ['./sort-content.component.css']
})
export class SortContentComponent implements OnInit {

  mdDict: string;

  constructor(
    private transferDataService: TransferDataService,
  ) {
  }

  ngOnInit() {
    this.transferDataService.remoteData$.subscribe(x => {
      this.mdDict = x;
    });
  }

}
