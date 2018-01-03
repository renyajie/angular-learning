import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h2>Navigation && Router</h2>
    <nav>
      <a routerLink="./crisis-center" routerLinkActive="active">Crisis Center</a>
      <!--这里url匹配上才能支持active，重定向这里也要改-->
      <a routerLink="./hero" routerLinkActive="active">Heroes</a>
      <a routerLink="./admin" routerLinkActive="active">Admin</a>
      <a routerLink="./login" routerLinkActive="active">Login</a>
      <a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>
    </nav>
    <hr class="hr2">
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
