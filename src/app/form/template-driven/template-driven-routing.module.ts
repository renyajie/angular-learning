import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateDrivenComponent } from './template-driven.component';

const formTemplateDrivenRoutes: Routes = [
  {
    path: '',
    component: TemplateDrivenComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(formTemplateDrivenRoutes)
  ]
})
export class TemplateDrivenRoutingModule { }
