import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { ExampleOneComponent } from './example-one.component';

const diExampleOneRoutes: Routes = [
  {
    path: '',
    component: ExampleOneComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(diExampleOneRoutes)
  ]
})
export class ExampleOneRoutingModule { }
