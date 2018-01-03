import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { ExampleThreeComponent } from './example-three.component';

const diExampleThreeRoutes: Routes = [
  {
    path: '',
    component: ExampleThreeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(diExampleThreeRoutes)
  ]
})
export class ExampleThreeRoutingModule { }
