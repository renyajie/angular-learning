import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { SsmComponent } from './ssm.component';
import { PageNotFoundComponent } from '../core/not-found.component';

const ssmRouters: Routes = [
  {
    path: 'ssm',
    component: SsmComponent,
    children: [
      {
        path: 'basic',
        loadChildren: 'app/ssm/basic/basic.module#BasicModule'
      },
      {
        path: 'ui',
        loadChildren: 'app/ssm/ui/ui.module#UiModule'
      },
      {
        path: '', redirectTo: 'basic', pathMatch: 'full'
      },
      {
        path: '**', component: PageNotFoundComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(ssmRouters)
  ],
  exports: [RouterModule]
})
export class SsmRoutingModule { }
