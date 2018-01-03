import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/start-page" routerLinkActive="active">Start Page</a>
      <a routerLink="/navigation" routerLinkActive="active">Navigation</a>
      <a routerLink="/dependency-injection" routerLinkActive="active">Dependency Injection</a>
      <a routerLink="/form" routerLinkActive="active">Form</a>
      <a routerLink="/ssm" routerLinkActive="active">SSM</a>
    </nav>
    <hr class="hr1">
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Angular Learn';
}
