import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h2>Example Two</h2>
    <p class="center">
      这是一个Component和子Component通过Service互动的一个好例子，
      包含了值传递，Observable的使用等
    </p>
    <app-di-2-heroes-list></app-di-2-heroes-list>
  `
})
export class ExampleTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
