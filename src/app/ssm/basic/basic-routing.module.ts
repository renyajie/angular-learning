import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic.component';

const ssmBasicRouters: Routes = [
  {
    path: '',
    component: BasicComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ssmBasicRouters)
  ],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
