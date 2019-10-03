import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  private remoteDataSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  remoteData$: Observable<string> = this.remoteDataSubject.asObservable();

  constructor() {
  }

  tranferData(data: string) {
    if (data) {
      this.remoteDataSubject.next(data);
      // this.remoteData$ = this.remoteDataSubject.asObservable();
    }
  }
}
