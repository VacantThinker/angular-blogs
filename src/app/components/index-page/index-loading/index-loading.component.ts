import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IndexLoadMessageService} from '../../../services/index-load-message.service';

@Component({
  selector: 'app-index-loading',
  templateUrl: './index-loading.component.html',
  styleUrls: ['./index-loading.component.scss']
})
export class IndexLoadingComponent implements OnInit, AfterViewInit {
  isHidden: boolean;

  constructor(
    private indexLoadMessageService: IndexLoadMessageService,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // this.isHidden = true;
    this.indexLoadMessageService.isHiddenData
      .subscribe({
        next: value => {
          this.isHidden = value;

          console.log(`this.isHidden=${this.isHidden}\tDate=${Date.now()}`);
          this.cd.detectChanges();
        }
      });
  }

}
