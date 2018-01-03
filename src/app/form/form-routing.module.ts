import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form.component';
import { PageNotFoundComponent } from '../core/not-found.component';

const formRoutes: Routes = [
  {
    path: 'form',
    component: FormComponent,
    children: [
      {
        path: 'user-input',
        loadChildren: 'app/form/user-input/user-input.module#UserInputModule'
      },
      {
        path: 'template-driven',
        loadChildren: 'app/form/template-driven/template-driven.module#TemplateDrivenModule'
      },
      {
        path: '', redirectTo: 'user-input', pathMatch: 'full'
      },
      {
        path: '**', component: PageNotFoundComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(formRoutes)
  ],
  exports: [ RouterModule ]
})
export class FormRoutingModule { }
