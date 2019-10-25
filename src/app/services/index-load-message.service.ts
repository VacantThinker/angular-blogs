import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexLoadMessageService {

  /**
   * 默认值true, 不显示动画
   */
  private isHiddenSource = new BehaviorSubject<boolean>(true);
  /**
   * 是否显示[动画]
   */
  isHiddenData = this.isHiddenSource.asObservable();

  constructor() {
  }

  /**
   * true 隐藏动画, false 显示动画
   * @param isHidden 是否隐藏
   */
  updateIsHiddenData(isHidden: boolean) {
    this.isHiddenSource.next(isHidden);
  }

}
