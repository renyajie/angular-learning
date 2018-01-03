import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

const heroesRoutes: Routes = [
  // 实现URL的更新，重定向操作
  {
    path: '',
    children: [
      {
        path: '',
        component: HeroListComponent
      },
      {
        path: ':id',
        component: HeroDetailComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
