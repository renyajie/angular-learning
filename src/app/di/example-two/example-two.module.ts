import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleTwoRoutingModule } from './example-two-routing.module';
import { HeroModule } from './hero/hero.module';

import { ExampleTwoComponent } from './example-two.component';

@NgModule({
  imports: [
    CommonModule,
    HeroModule,
    ExampleTwoRoutingModule
  ],
  declarations: [ ExampleTwoComponent ]
})
export class ExampleTwoModule { }
