import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { AuthService } from '../routing-guard/auth.service';

@Component({
  template: `
  <h3>LOGIN</h3>
  <p>{{message}}</p>
  <p>
    <button (click)="login()" *ngIf="!authService.isLoggedIn">Login</button>
    <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
  </p>
 `
})
export class LoginComponent {

  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    // 调用Service的login()方法模拟登录，并跳转页面
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // 这里navigation/login表示绝对路径
        let redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : 'navigation/crisis-center';

        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
