import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ExampleTwoComponent } from './example-two.component';

const diExampleTwoModule: Routes = [
  {
    path: '',
    component: ExampleTwoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(diExampleTwoModule)
  ]
})
export class ExampleTwoRoutingModule { }
