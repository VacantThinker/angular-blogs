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

  tranferData(section: string) {
    if (section) {
      this.remoteDataSubject.next(section);
    }
  }
}
