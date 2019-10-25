import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionSendMessageService {
  private messageSource = new BehaviorSubject<string>(null);
  message$ = this.messageSource.asObservable();

  constructor() { }

  sendMessageData(message: string) {
    this.messageSource.next(message);
  }

}
