import Showdown from 'showdown';
import MarkdownIt from 'markdown-it';
import {Observable} from 'rxjs';

// import hljs from 'highlight.js'; // https://highlightjs.org/

export class DataField {

  public static headImageUrl = 'https://raw.githubusercontent.com/vt-server-data/angular-blog-data/master/image/headimage/50100840.png';

  public static pageSection = '/section/';
  public static markdownIt = new MarkdownIt();
  public static converter = new Showdown.Converter();

  public static getHtmlWithMarkdown(mdContent: string, type: number): string {
    let html = '';
    switch (type) {
      case 1:
        html = this.markdownIt.render(mdContent);
        break;
      case 2:
        html = this.converter.makeHtml(mdContent);
        break;
    }

    return html;
  }

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
