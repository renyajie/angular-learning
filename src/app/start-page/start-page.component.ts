import { Component } from '@angular/core';

class InternalWebSite {
  constructor(public name: string, public url: string) {};
}

@Component({
  template: `
    <h2>Angular学习之旅</h2>
    <p>通过在Angular官方网站的学习，对已学内容进行梳理，把自己认为较为重要的内容整合在一个项目里</p>
    <p>本次学习主要包含一下几个部分:</p>
    <ul>
      <li *ngFor="let site of sites; let i = index">
        内容{{i + 1}}: <a href="{{site.url}}">{{site.name}}</a>
      </li>
    </ul>
  `
})
export class StartPageComponent {
  private sites: InternalWebSite[] = [
    new InternalWebSite('navigation', '/navigation'),
    new InternalWebSite('Hero-Tutorial', '/hero-tutorial'),
    new InternalWebSite('Dependency-Injection', '/dependency-injection'),
    new InternalWebSite('ssm', '/ssm')
  ];
}
