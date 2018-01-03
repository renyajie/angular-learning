import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h2>Example One</h2>
    <p class="center">这里例子里，可以通过切换用户来查看不同的英雄列表，被认证的用户可以查看机密英雄，未被认证的用户只能查看一般英雄</p>
    <app-di-heroes></app-di-heroes>
  `
})
export class ExampleOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
