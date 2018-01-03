import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiRoutingModule } from './di-routing.module';

import { DiComponent } from './di.component';


@NgModule({
  imports: [
    CommonModule,
    DiRoutingModule
  ],
  declarations: [
    DiComponent
  ]
})
export class DiModule { }
