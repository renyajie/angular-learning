import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ParentFinderComponent,
  AlexComponent,
  CathyComponent,
  CraigComponent,
  CarolComponent,
  AliceComponent,
  BarryComponent,
  ChrisComponent,
  BethComponent,
  BobComponent
 } from './parent-finder.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ParentFinderComponent,
    AlexComponent,
    CathyComponent,
    CraigComponent,
    CarolComponent,
    AliceComponent,
    BarryComponent,
    ChrisComponent,
    BethComponent,
    BobComponent
  ],
  exports: [
    ParentFinderComponent
  ]
})
export class ParentFinderModule { }
