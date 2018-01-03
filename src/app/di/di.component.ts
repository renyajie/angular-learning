import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h2>Dependency Injection</h2>
    <nav>
      <a routerLink="./example-one" routerLinkActive="active">Example One</a>
      <a routerLink="./example-two" routerLinkActive="active">Example Two</a>
      <a routerLink="./example-three" routerLinkActive="active">Example Three</a>
    </nav>
    <hr class="hr2">
    <router-outlet></router-outlet>
  `
})
export class DiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
