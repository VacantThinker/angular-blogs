import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {MdBean} from '../beans/md-bean';

@Injectable({
  providedIn: 'root'
})
export class MdDataService {
  // templateStr = 'https://raw.githubusercontent.com/vt-angular/angular-blogs-data/master/json_/md_array.json';
  private prefixStr = 'https://raw.githubusercontent.com/vt-angular/angular-blogs-data/master/json_/';
  private midfix = 'md_array';
  private suffix = '.json';
  private sprit = '/';

  constructor( // the service, dont execute ngOnInit() method.
    private http: HttpClient,
  ) {
  }

  getSideDictItem(nav: string, item: string): Observable<MdBean> {
    return this.getSideDictList(nav)
      .pipe(
        map(
          itemList => itemList.find(
            itemBean => itemBean.mdTitle === item)));
  }

  getSideDictList(nav: string): Observable<Array<MdBean>> {
    const url = this.prefixStr + this.midfix + this.sprit + nav + this.suffix;
    return this.http.get<Array<MdBean>>(url);
  }

  getSideList(): Observable<Array<string>> {
    const url = this.prefixStr + this.midfix + this.suffix;
    return this.http.get<Array<string>>(url);
  }

}
