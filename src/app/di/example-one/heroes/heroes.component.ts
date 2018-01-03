import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

import { User, UserService } from '../core/user.service';

@Component({
  selector: 'app-di-heroes',
  // @Component级别的Provider和@NgModule的Provider不同
  // 1: 这里的service的生存时间只在这个组件和它的子组件
  // 2: service示例每次随着component重生，每次出现都不一样
  providers: [ HeroService ],
  template: `
    <h3>Heroes</h3>
    <button (click)="changeUser(); list.refurbish();">Change User</button>
    <h3>Current User: {{user.name}}</h3>
    <app-di-hero-list #list></app-di-hero-list>
  `
})
export class HeroesComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.user;
  }

  changeUser() {
    this.user = this.userService.getNewUser();
  }
}
