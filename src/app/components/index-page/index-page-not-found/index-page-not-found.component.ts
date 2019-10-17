import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription, timer} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-index-page-not-found',
  templateUrl: './index-page-not-found.component.html',
  styleUrls: ['./index-page-not-found.component.css']
})
export class IndexPageNotFoundComponent implements OnInit, OnDestroy {
  content = 'page not found';
  private subscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) {
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => this.titleService.setTitle(paramMap.get('title')));
  }

  ngOnDestroy(): void {
    this.content = null;
    // this.couter_down = null;
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    // const couterNum = this.couter_down;
    const couterNum = 0;
    const periodTime = 1000;

    this.subscription = timer(0, periodTime)
      .pipe(
        take(couterNum + 1),
        map(x => couterNum - x)
      ).subscribe(
        null,
        null,
        () => this.router.navigateByUrl('')
      );

  }

}
