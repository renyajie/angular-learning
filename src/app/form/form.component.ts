import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h2>Form</h2>
    <nav>
      <a routerLink="./user-input" routerLinkActive="active">User Input</a>
      <a routerLink="./template-driven" routerLinkActive="active">Template Driven</a>
    </nav>
    <hr class="hr2">
    <router-outlet></router-outlet>
  `
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
