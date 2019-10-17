import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MdBeanSection} from '../beans/md-bean-section';

@Injectable({
  providedIn: 'root'
})
export class MdArrayDataService {
  // templateStr = 'https://raw.githubusercontent.com/vt-angular/angular-blogs-data/master/json_/md_array.json';

  private hostName = 'https://raw.githubusercontent.com/';
  private organizationName = 'vt-server-data/';
  private repositoryName = 'angular-blog-data/';
  private branchName = 'master/';
  private jsonFolderName = 'json_/';
  private mdFolderName = 'contents/';

  private httpPreUrl = this.hostName + this.organizationName + this.repositoryName + this.branchName;
  private mdUrl = this.httpPreUrl + this.mdFolderName;
  private jsonUrl = this.httpPreUrl + this.jsonFolderName;
  private midfix = 'md_array';
  private jsonSuffix = '.json';
  private mdSuffix = '.md';
  private sprit = '/';

  constructor( // the service, dont execute ngOnInit() method.
    private http: HttpClient,
  ) {
  }

  // https://raw.githubusercontent.com/vt-server-data/angular-blog-data/master/contents/angular/property-x-is-.md
  getMdContent(section: string, mdTitle: string): Observable<string> {
    if (section) {
      if (mdTitle) {
        const url = this.mdUrl + section + this.sprit + mdTitle + this.mdSuffix;
        // console.log('getMdContent\n' + url);
        return this.http.get<string>(url, {responseType: 'text' as 'json'});
      }
    }
  }

  /**
   * get section item-array .
   * @param section eg: angular, css, ...
   * @return MdBeanSection
   *
   * @code
   * {
   *   "mdList": [
   *       "the-lengths-of-css",
   *   ],
   *   "size": 3
   * }
   */
  getMdSectionArray(section: string): Observable<MdBeanSection> {
    if (section) {
      const url = this.jsonUrl + this.midfix + this.sprit + section + this.jsonSuffix;
      // console.log('getMdSectionArray\n' + url);
      return this.http.get<MdBeanSection>(url);
    }
  }

  /**
   * get md section-array .
   * @return ["angular", "css", ...]
   */
  getMdArray(): Observable<Set<string>> {
    const url = this.jsonUrl + this.midfix + this.jsonSuffix;
    // console.log('getMdArray\n' + url);
    return this.http.get<Set<string>>(url);
  }

}
