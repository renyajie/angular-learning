import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui.component';

const ssmUiRouters: Routes = [
  {
    path: '',
    component: UiComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ssmUiRouters)
  ],
  exports: [RouterModule]
})
export class UiRoutingModule { }
