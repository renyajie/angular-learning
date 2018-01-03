import { Injectable } from '@angular/core';
import { CanActivate, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot,
  CanActivateChild, NavigationExtras, CanLoad } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) {}
  
  /**
   * 验证权限，用户进入某个模块时调用
   * @param route 默认
   * @param state 默认，可取的未来页面的url，也就是跳转之后的url
   * @returns 需要返回一个Observable<boolean>
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let url: string = state.url;
    return this.checkLogin(url);
  }

  /**
   * 和canActivate几乎相同，但canActivateChild用于控制模块内子路由的权限
   * @param route 
   * @param state
   */
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    return this.canActivate(route, state);
  }

  /**
   * 用于懒加载，先验证权限再加载模块
   * @param route 获取url
   */
  canLoad(route: Route): boolean {
    let url = `navigation/${route.path}`;
    return this.checkLogin(url);
  }

  /**
   * 检查登录状态，若为登录返回true，若没登录跳转登录界面
   * @param url 当前url
   */
  checkLogin(url: string): boolean {
    if(this.authService.isLoggedIn) {
      return true;
    }
    this.authService.redirectUrl = url;

    //携带额外信息跳转
    let sessionId = 123456789;
    let navigationExtras: NavigationExtras = {
      queryParams: { 'sessionId': sessionId },
      fragment: 'anchor'
    }
    //router的navigation方法使用的也是绝对路径
    this.router.navigate(['navigation/login'], navigationExtras);
    return false;
  }
}