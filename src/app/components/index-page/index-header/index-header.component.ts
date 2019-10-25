import {Component, OnInit} from '@angular/core';
import {BeanRoute} from '../../../beans/bean-route';

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.scss']
})
export class IndexHeaderComponent implements OnInit {
  beanRouteSet: Set<BeanRoute> = new Set<BeanRoute>();

  // headImageUrl = DataField.headImageUrl;

  constructor() {
  }

  ngOnInit() {

    this.beanRouteSet.add(new BeanRoute('', '主页'));
    this.beanRouteSet.add(new BeanRoute('section', '分类'));
  }

  beanClick(bean: BeanRoute) {

  }
}
