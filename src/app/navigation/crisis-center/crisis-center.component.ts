import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h3>CRISIS CENTER</h3>
    <router-outlet></router-outlet>
  `
})
export class CrisisCenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
