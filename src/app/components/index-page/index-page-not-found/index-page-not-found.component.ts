import {Component, OnInit} from '@angular/core';
import {concatMap, delay} from 'rxjs/operators';
import {from, of} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index-page-not-found',
  templateUrl: './index-page-not-found.component.html',
  styleUrls: ['./index-page-not-found.component.css']
})
export class IndexPageNotFoundComponent implements OnInit {

  timeCountDown = 5;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    const myArray = [4, 3, 2, 1];

    from(myArray).pipe(
      concatMap(item => of(item).pipe(delay(1000)))
      // delay(1000)
    ).subscribe(timedItem => {
      this.timeCountDown = timedItem;
      console.log(timedItem);
    }, null, () => {
      this.router.navigateByUrl('').then(null);
    });
  }

}
