import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IndexLoadMessageService} from '../../../services/index-load-message.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit, AfterViewInit {

  constructor(
    private indexLoadMessageService: IndexLoadMessageService,
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.indexLoadMessageService.updateIsHiddenData(true);
  }

}
