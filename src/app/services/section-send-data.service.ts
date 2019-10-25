import {MdSection} from '../beans/md-section';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionSendDataService {
  // string

  // set
  private mdSectionSetSource = new BehaviorSubject<Set<MdSection>>(null);
  mdSectionSet$ = this.mdSectionSetSource.asObservable();

  // string
  private mdSectionSource = new BehaviorSubject<string>(null);
  mdSection$ = this.mdSectionSource.asObservable();

  // set
  private mdTitleSetSource = new BehaviorSubject<Set<string>>(null);
  mdTitleSet$ = this.mdTitleSetSource.asObservable();

  // string
  private mdContentSource = new BehaviorSubject<string>(null);
  mdContent$ = this.mdContentSource.asObservable();

  constructor() {
  }

  sendMdSectionSetData(mdSectionSet: Set<MdSection>) {
    this.mdSectionSetSource.next(mdSectionSet);
  }

  sendMdSectionData(mdSection: string) {
    this.mdSectionSource.next(mdSection);
  }

  sendMdTitleSetData(mdSectionSet: Set<string>) {
    this.mdTitleSetSource.next(mdSectionSet);
  }

  sendMdContentData(mdContent: string) {
    this.mdContentSource.next(mdContent);
  }
}
