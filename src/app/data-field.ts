// import Showdown from 'showdown';
import {Observable} from 'rxjs';


export class DataField {

  // public static headImageUrl = 'https://raw.githubusercontent.com/vt-server-data/angular-blog-data/master/image/headimage/50100840.png';
  public static pageSection = '/section/';

  public static messageLoading = 'loading';
  public static messageEmpty = '';


  // public static markdownIt = new MarkdownIt();
  // public static getHtmlUseMarkdownByMarkdownIt(mdContent: string): string {
  //   return this.markdownIt.render(mdContent);
  // }

  // public static converter = new Showdown.Converter();
  // public static getHtmlUseMarkdownByShowdown(mdContent: string): string {
  //   return this.converter.makeHtml(mdContent);
  // }

  public static logDataObservable<T>(o: Observable<T>) {
    o.subscribe(data => console.log(data));
  }

  public static checkNullWithstring(data: string): boolean {
    if (data == null) {
      return false;
    }
    if (data === 'undefined') {
      return false;
    }
    if (data.length === undefined) {
      return false;
    }
    if (data.length === 0) {
      return false;
    }
    return true;
  }
}
