import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsmRoutingModule } from './ssm-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SsmComponent } from './ssm.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SsmRoutingModule
  ],
  declarations: [
    SsmComponent
  ]
})
export class SsmModule { }
