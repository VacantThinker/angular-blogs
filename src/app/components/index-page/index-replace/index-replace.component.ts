import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from '../../../animations/slide-in-animation';

@Component({
  selector: 'app-index-replace',
  templateUrl: './index-replace.component.html',
  styleUrls: ['./index-replace.component.css'],
  animations: [
    slideInAnimation
  ],
})

export class IndexReplaceComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
