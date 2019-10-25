import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MdSection} from '../beans/md-section';

@Injectable({
  providedIn: 'root'
})
export class SectionHttpDataService {

  private hostUrl = 'https://raw.githubusercontent.com/vacantthinker-serverdata/spring-boot-angular-blog-data/master';
  // private hostUrl = 'http://localhost:8080';
  // private hostUrl = '';

  /**
   * /api/md
   */
  private apiName = `${this.hostUrl}/api/md`;
  /**
   * /json_
   */
  private jsonUrl = `${this.apiName}/json_`;
  /**
   * /contents
   */
  private mdUrl = `${this.apiName}/contents`;

  /**
   * md_section
   */
  private section = 'md_section';
  /**
   * .json
   */
  private suffixJson = '.json';
  /**
   * .md
   */
  private suffixMd = '.md';
  // private suffixList = '.list';
  // private sprit = '/';

  constructor( // the service, dont execute ngOnInit() method.
    private http: HttpClient,
  ) {
  }

  // https://raw.githubusercontent.com/vt-server-data/angular-blog-data/master/contents/angular/property-x-is-.md
  getMdContent(sectName: string, mdTitle: string): Observable<string> {
    if (sectName) {
      if (mdTitle) {
        const url = `${this.mdUrl}/${sectName}/${mdTitle}${this.suffixMd}`; // url=/contents/sectName/mdTitle.md
        // console.log('getMdContent\n' + url);
        return this.http.get<string>(url, {responseType: 'text' as 'json'});
      }
    }
  }

  /**
   * get section item-array .
   * @param section eg: angular, css, ...
   * @return MdSectionSet [ng-1, ng-2, ng-3, ]
   */
  getMdSectionSet(section: string): Observable<Set<string>> {
    if (section) {
      const url = `${this.jsonUrl}/${this.section}/${section}${this.suffixJson}`; // url=/json_/md_section/sectionXXX.json
      return this.http.get<Set<string>>(url);
    }
  }

  /**
   * get md section-array .
   * @return ["angular", "css", ...]
   */
  getMdBeanSet(): Observable<Set<MdSection>> {
    const url = `${this.jsonUrl}/${this.section}${this.suffixJson}`; // url=/api/md/json_/md_section.json
    return this.http.get<Set<MdSection>>(url);
  }

}
