import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BeanRoute} from '../../../models/bean-route';
import {IndexLoadMessageService} from '../../../services/index-load-message.service';

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.scss']
})
export class IndexHeaderComponent implements OnInit, AfterViewInit {
  beanRouteSet: Set<BeanRoute> = new Set<BeanRoute>();

  // headImageUrl = DataField.headImageUrl;

  constructor(
    private indexLoadMessageService: IndexLoadMessageService,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
  }

  routeNameClick(bean: BeanRoute) {
    this.indexLoadMessageService.updateIsHiddenData(false);
    console.log(`IndexHeaderComponent    \trouteNameClick    \twhichOne`);
  }

  ngAfterViewInit(): void {
    // 加载导航数据
    this.beanRouteSet.add(new BeanRoute('', '主页'));
    this.beanRouteSet.add(new BeanRoute('section', '分类'));
    this.cd.detectChanges();
  }
}
