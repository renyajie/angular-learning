import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <h1 class="title">{{title}}</h1>
  `
})
export class TestComponent implements OnInit {

  title = "let's test!";

  ngOnInit() {
  }

}
