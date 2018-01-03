import { Component } from '@angular/core';

@Component({
  template:  `
    <h3>ADMIN</h3>
    <nav>
      <!--
      [routerLinkActiveOptions]="{ exact: true } 
      make Dashboard is available only in /admin, not in /admin/*, compared with crisis
      -->
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="./crises" routerLinkActive="active">Manage Crises</a>
      <a routerLink="./heroes" routerLinkActive="active">Manage Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}