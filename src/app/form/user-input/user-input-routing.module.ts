import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserInputComponent } from './user-input.component';

const formUserInputRoutes: Routes = [
  {
    path: '',
    component: UserInputComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(formUserInputRoutes)
  ]
})
export class UserInputRoutingModule { }
