import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ExampleThreeRoutingModule } from './example-three-routing.module';
import { HeroModule } from './hero/hero.module';
import { CoreModule } from './core/core.module';
import { ParentFinderModule } from './find-parent/parent-finder.module';

import { ExampleThreeComponent } from './example-three.component';

@NgModule({
  imports: [
    CoreModule,
    FormsModule,
    HeroModule,
    ParentFinderModule,
    ExampleThreeRoutingModule
  ],
  declarations: [
    ExampleThreeComponent
  ]
})
export class ExampleThreeModule { }
