import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssm',
  template: `
    <h2>SSM</h2>
    <nav>
      <a routerLink="./basic" routerLinkActive="active">Basic Test</a>
      <a routerLink="./ui" routerLinkActive="active">UI Test</a>
    </nav>
    <hr class="hr2">
    <router-outlet></router-outlet>
  `
})
export class SsmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
