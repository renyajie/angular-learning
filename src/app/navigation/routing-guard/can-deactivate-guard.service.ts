import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/**
 * 接口式编程，让component实现CanComponentDeactivate，实现canDeactivate的代码复用
 */
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{

  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate();
  }

}
