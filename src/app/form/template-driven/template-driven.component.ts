import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  template: `
    <app-f-td-hero-form></app-f-td-hero-form>
  `
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
