import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInputRoutingModule } from './user-input-routing.module';
import { DemoModule } from './demo/demo.module';

import { UserInputComponent } from './user-input.component';

@NgModule({
  imports: [
    CommonModule,
    DemoModule,
    UserInputRoutingModule
  ],
  declarations: [
    UserInputComponent
  ]
})
export class UserInputModule { }
