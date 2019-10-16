import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MdBean} from '../beans/md-bean';
import {init} from 'protractor/built/launcher';

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
    const url = this.mdUrl + section + this.sprit + mdTitle + this.mdSuffix;

    return this.http.get<string>( url, {responseType : 'text' as 'json'});
  }

  getMdSectionArray(section: string): Observable<Set<MdBean>> {
    const url = this.jsonUrl + this.midfix + this.sprit + section + this.jsonSuffix;
    return this.http.get<Set<MdBean>>(url);
  }

  getMdArray(): Observable<Set<string>> {
    const url = this.jsonUrl + this.midfix + this.jsonSuffix;
    return this.http.get<Set<string>>(url);
  }

}
