import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroBioComponent } from './hero-bio.component';
import { HeroBiosComponent, HeroBiosAndContactsComponent } from './hero-bios.component';
import { HeroContactComponent } from './hero-contact.component';
import { HeroOfTheMonthComponent } from './hero-of-the-month.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HeroBioComponent,
    HeroBiosComponent,
    HeroBiosAndContactsComponent,
    HeroContactComponent,
    HeroOfTheMonthComponent
  ],
  exports: [
    HeroBiosComponent,
    HeroBiosAndContactsComponent,
    HeroOfTheMonthComponent
  ]
})
export class HeroModule { }
