import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

import { Crisis, CrisisService } from './crisis.service';

/**
 * 导航到下一个页面之前提前获取数据，避免页面空白等待
 */
@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis>{

  constructor(private service: CrisisService, private router: Router) { }

  /**
   * 提前获取Crisis对象，若找不到取消导航，返回原页面
   * @param route 默认参数
   * @param state 默认参数
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = route.paramMap.get('id');
    return this.service.getCrisis(id).take(1).map(crisis => {
      if(crisis) {
        return crisis;
      } else {
        this.router.navigate(['./crisis-center']);
        return null;
      }
    })
  }

}
