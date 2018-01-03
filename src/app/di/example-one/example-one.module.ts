import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from './core/core.module';
import { HeroesModule } from './heroes/heroes.module';
import { ExampleOneRoutingModule } from './example-one-routing.module';

import { ExampleOneComponent } from './example-one.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    HeroesModule,
    ExampleOneRoutingModule
  ],
  declarations: [
    ExampleOneComponent
  ]
})
export class ExampleOneModule { }
