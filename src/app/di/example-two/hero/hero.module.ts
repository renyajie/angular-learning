import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroesService } from './hero.service';

import { HeroTaxReturnComponent } from './hero-tax-return.component';
import { HeroesListComponent } from './hero-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeroTaxReturnComponent,
    HeroesListComponent
  ],
  providers: [ HeroesService ],
  exports: [HeroesListComponent]
})
export class HeroModule { }
